#!name=蝦皮自動簽到
#!desc=每天早上自動簽到 & 開寶箱。先到「我的」→「邀請我的朋友」取得 token。 v20220103

[Script]
cron "0 0 * * *" script-path=https://kinta.ma/surge/scripts/shopee_checkin.js, wake-system=1, timeout=30
cron "0 0 * * *" script-path=https://kinta.ma/surge/scripts/shopee_luckydraw.js, wake-system=1, timeout=30
shopee_token.js = type=http-request,pattern=^https:\/\/mall\.shopee\.tw\/api\/v4\/microsite\/campaign_site_page,script-path=https://kinta.ma/surge/scripts/shopee_token.js,script-update-interval=-1

[MITM]
hostname = %APPEND% mall.shopee.tw
