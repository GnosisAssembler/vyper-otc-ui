import { Connection, PublicKey } from '@solana/web3.js';

import { AbsPlugin, RatePluginTypeIds } from '../AbsPlugin';

export abstract class AbsRatePlugin extends AbsPlugin {
	abstract loadData(connection: Connection): Promise<void>;
	abstract getPluginDescription(): string;
	abstract getPluginLastValue(): number;
	abstract getPublicKeysForRefresh(): PublicKey[];
	abstract clone(): AbsRatePlugin;

	abstract getTypeId(): RatePluginTypeIds;
}
