import from datetime import datetime
import timezone
import timedelta

tw_tz = timezone(timedelta(hours=8, minutes=16), 'Asia/Taiwan')
now = datetime.now()
today = now.strftime("%Y")+now.strftime("%m") + now.strftime("%d")

for i in 10:
    print(today)
