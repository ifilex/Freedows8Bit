import { config } from './config.js';

class SwitchInterface {
    constructor() {
        this.recentApps = this.loadRecentApps();
        this.renderApps();
        this.setupBackgroundSystem();
        this.setupNavigation();
        this.setupSettings();
    }

    setupBackgroundSystem() {
        const lastGameBackground = localStorage.getItem('lastGameBackground');
        if (lastGameBackground) {
            document.querySelector('.game-background').style.backgroundImage = `url(${lastGameBackground})`;
        }
    }

    setupNavigation() {
        document.getElementById('homeButton').addEventListener('click', () => {
            window.location.href = 'index.html';
        });
        
        document.getElementById('settingsButton').addEventListener('click', () => {
            document.getElementById('settingsModal').showModal();
        });
    }

    setupSettings() {
        // Load and set player name
        const playerName = localStorage.getItem('playerName') || 'Player 1';
        document.querySelector('.user-name').textContent = playerName;
        document.getElementById('playerNameInput').value = playerName;

        // Save player name
        document.getElementById('saveSettings').addEventListener('click', () => {
            const newName = document.getElementById('playerNameInput').value;
            localStorage.setItem('playerName', newName);
            document.querySelector('.user-name').textContent = newName;
            document.getElementById('settingsModal').close();
        });

        // Clear recent apps
        document.getElementById('clearRecentApps').addEventListener('click', () => {
            this.recentApps = [];
            this.saveRecentApps();
            this.renderApps();
            document.querySelector('.game-background').style.backgroundImage = 'none';
            localStorage.removeItem('lastGameBackground');
        });

        // Close modal
        document.getElementById('closeSettings').addEventListener('click', () => {
            document.getElementById('settingsModal').close();
        });

        // Handle app deletion
        document.getElementById('recentApps').addEventListener('click', (e) => {
            const deleteBtn = e.target.closest('.delete-app');
            if (deleteBtn) {
                e.preventDefault();
                const appTile = deleteBtn.closest('.app-tile');
                const appId = appTile.dataset.id;
                this.removeApp(appId);
            }
        });
    }

    removeApp(appId) {
        this.recentApps = this.recentApps.filter(app => app.id !== appId);
        this.saveRecentApps();
        this.renderApps();
    }

    loadRecentApps() {
        const stored = localStorage.getItem(config.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    saveRecentApps() {
        localStorage.setItem(config.storageKey, JSON.stringify(this.recentApps));
    }

    addRecentApp(app) {
        // Remove if already exists
        this.recentApps = this.recentApps.filter(a => a.id !== app.id);
        // Add to start
        this.recentApps.unshift(app);
        // Limit the number of recent apps
        if (this.recentApps.length > config.maxRecentApps) {
            this.recentApps.pop();
        }
        this.saveRecentApps();
        this.renderApps();
        // Update background if the app has a background image
        if (app.backgroundImage) {
            localStorage.setItem('lastGameBackground', app.backgroundImage);
            document.querySelector('.game-background').style.backgroundImage = `url(${app.backgroundImage})`;
        }
    }

    renderApps() {
        const container = document.getElementById('recentApps');
        if (this.recentApps.length === 0) {
            container.innerHTML = `
                <div class="app-tile empty-state">
                    <div class="app-icon">
                        <svg viewBox="0 0 24 24" width="48" height="48">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div class="app-name">No Recent Games</div>
                </div>
            `;
            return;
        }

        container.innerHTML = this.recentApps.map(app => `
            <a href="${app.link}" class="app-tile" data-id="${app.id}">
                <button class="delete-app" title="Remove from recent">×</button>
                <div class="app-icon">
                    ${app.icon}
                </div>
                <div class="app-name">${app.name}</div>
            </a>
        `).join('');
    }

    launchApp(appId) {
        const app = this.recentApps.find(a => a.id === appId);
        if (app) {
            this.addRecentApp(app); // Move to front of recent list
            window.location.href = app.link;
        }
    }
}

// Initialize the interface
const switchUI = new SwitchInterface();

// Example of how to add a new app when launched:
window.addToRecent = (app) => {
    switchUI.addRecentApp(app);
};

// Example app object:
/*
{
    id: 'unique-id',
    name: 'App Name',
    icon: '<svg>...</svg>', // SVG icon as string
    link: 'app-url',
    backgroundImage: 'background-url'
}
*/