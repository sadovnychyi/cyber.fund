SyncedCron.config({
  log: false,
  //logger: log4js.getLogger("synced-cron"),
  collectionTTL: 604800,
  utc: true
});
//if (!process.env.GO_AWAY_SYNCED_CRON)
{
  console.log("starting synced cron");
  SyncedCron.start();
}

