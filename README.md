# POTTY BOMBER WEBSITE YOOOO

we're making a website for the pb jelly jams finally here we go

## Fly.io Stuff

- Big thing is the `/assets` directory is not embedded in the executable. Instead, it's sent directly to the client via the `[[statics]]` section of the `fly.toml` file.
- Might want to revisit the `[[vm]]` section at some point. I'm just using the defaults right now. Prolly don't need even a `1gb` of memory, but whatever.
- The `Dockerfile` is also mostly the default except for copying the assets folder into the container.

![Iconic Potty Bomber sighting](/assets/iconic-pb.jpg)
