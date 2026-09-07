const { DB_USERNAME, DB_PASSWORD } = process.env;

export const connectionStr =
  `mongodb://${encodeURIComponent(DB_USERNAME)}:${encodeURIComponent(DB_PASSWORD)}` +
  `@ac-lokxfxi-shard-00-00.rxnknv2.mongodb.net:27017,` +
  `ac-lokxfxi-shard-00-01.rxnknv2.mongodb.net:27017,` +
  `ac-lokxfxi-shard-00-02.rxnknv2.mongodb.net:27017` +
  `/productdb?replicaSet=atlas-12wi42-shard-0&authSource=admin&retryWrites=true&w=majority&tls=true&appName=Cluster0`;
