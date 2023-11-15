import { Injectable } from '@nestjs/common';
import { DataSource,DataSourceOptions } from 'typeorm';

export interface DBConfigOptions {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    logging: boolean;
}
@Injectable()
export class DBConfig {
    private _dataSource: DataSource;

    get dataSource(): DataSource{
        return this._dataSource;
    }
    async init(config: DBConfigOptions) {
        if (this._dataSource?.isInitialized) {
            return;
        }
        const options: DataSourceOptions = {
            type:"mysql",
            host: config.host,
            port: config.port,
            username: config.username,
            password: config.password,
            database: config.database,
            poolSize: 10
        }
        this._dataSource = new DataSource(options);
        await this._dataSource.initialize();
    }
}