import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server = 'https://localhost:4430/';
    public ApiUrl = 'api/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
    public appTitle = "Document Ingestion Service";
    public err = '';
}