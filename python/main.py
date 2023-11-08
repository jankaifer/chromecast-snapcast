import pychromecast

APP_ID="1F35E02D"

print("Searching for chromecasts on local network ...")
chromecasts, browser = pychromecast.get_chromecasts()

# don't show groups, we wan't to control individual speakers ourself
chromecasts = filter(lambda cc: cc.cast_type != pychromecast.CAST_TYPE_GROUP, chromecasts)

print("We have found these:")
for i, cc in enumerate(chromecasts):
    print(f"{i}. {cc.name}")

print()
cast = chromecasts[int(input("Pick one: "))]

print(f'Connecting to {cast.name} ...')
cast.wait()
print(f'Running snapcast on {cast.name} ...')
cast.start_app(APP_ID)
print("Completed.")
