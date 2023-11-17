import {EditorClient, Panel, PanelLocation, Viewport} from 'lucid-extension-sdk';

const client = new EditorClient();

export class RightPanel extends Panel {
    private static icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png';

    constructor(client: EditorClient) {
        super(client, {
            title: 'Spotify',
            url: 'http://localhost:3000',
            location: PanelLocation.RightDock,
            iconUrl: RightPanel.icon,
        });
    }

    protected async messageFromFrame(message: any) {
        if (message === 'login') {
            console.log("extension hyoooooooooooo") 
            this.sendMessage({
                token: await client.getOAuthToken('spotify'),
            });
        }
    }
}

const rightPanel = new RightPanel(client);