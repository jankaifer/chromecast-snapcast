import pychromecast

APP_ID="1F35E02D"

print("Searching for chromecasts on local network ...")
chromecasts, browser = pychromecast.get_chromecasts()

# don't show groups, we wan't to control individual speakers ourself
chromecasts = list(filter(lambda cc: cc.cast_type != 'group', chromecasts))
chromecasts.sort(key=lambda cc: cc.name)

print("We have found these:")
for i, cc in enumerate(chromecasts):
    print(f"{i}. {cc.name}")

print()
cast = chromecasts[int(input("Pick one: "))]

print(f'Connecting to {cast.name} ...')
cast.wait()
browser.stop_discovery()

print(f'Running snapcast on {cast.name} ...')
cast.start_app(APP_ID)
cast.wait()
print(f'{cast.name} currently has app {cast.app_display_name} with id {cast.app_id}')
print("Completed.")
