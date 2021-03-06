import { MicroframeworkLoader, MicroframeworkSettings } from 'microframework';
import { Connection, getConnectionOptions } from 'typeorm';
import { createConnection } from 'typeorm-seeding';

import { env } from '../../env';

export let centralDBConnections: Connection[] = undefined;
export const typeormLoader: MicroframeworkLoader = async (settings: MicroframeworkSettings | undefined) => {

    const loadedConnectionOptions = await getConnectionOptions();

    const connectionOptions = Object.assign(loadedConnectionOptions, {
        type: env.db.type as any, // See createConnection options for valid types
        host: env.db.host,
        port: env.db.port,
        username: env.db.username,
        password: env.db.password,
        database: env.db.database,
        synchronize: env.db.synchronize,
        logging: env.db.logging,
        entities: env.app.dirs.entities,
        migrations: env.app.dirs.migrations,
        dateStrings: true,
    });
    const connection = await createConnection(connectionOptions);
    if (settings) {
        settings.setData('connection', connection);
        settings.onShutdown(() => connection.close());
        settings.onShutdown(() => centralDBConnections.forEach((conn: Connection) => conn.close()));
    }
};
