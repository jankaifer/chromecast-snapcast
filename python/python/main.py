import pychromecast

APP_ID="1F35E02D"

print("Searching for chromecasts on local network ...")
chromecasts, browser = pychromecast.get_chromecasts()

print("We have found these:")
for i, cc in enumerate(chromecasts):
    print(f"{i}. {cc.cast_info.friendly_name}")

print()
cast = chromecasts[int(input("Pick one: "))]

print(f'Connecting to {cast.cast_info.friendly_name} ...')
cast.wait()
print(f'Running snapcast on {cast.cast_info.friendly_name} ...')
cast.start_app(APP_ID)
print("Completed.")
