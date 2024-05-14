import pychromecast
import time

APP_ID="1F35E02D"
# APP_ID="CC1AD845"

print("Searching for chromecasts on local network ...")
chromecasts, browser = pychromecast.get_chromecasts()

# don't show groups, we wan't to control individual speakers ourself
chromecasts = list(filter(lambda cc: cc.cast_type != 'group', chromecasts))
chromecasts.sort(key=lambda cc: cc.name)

print("We have found these:")
for i, cc in enumerate(chromecasts):
    print(f"{i}. {cc.name}")

print()
# idx = int(input("Pick one: "))
idx = 2
cast = chromecasts[idx]

print(f'Connecting to {cast.name} ...')
cast.wait()
browser.stop_discovery()
print("status", cast.status)

print(f'Running snapcast on {cast.name} ...')
# cast.start_app(APP_ID)
cast.start_app(APP_ID)

time.sleep(2)

print(f'{cast.name} currently has app {cast.app_display_name} with id {cast.app_id}')
print("status", cast.status)
print("Completed.")
