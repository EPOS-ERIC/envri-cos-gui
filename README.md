# EPOS GUI

## Docker Runtime Configuration

The container image supports runtime configuration via environment variables.

| Variable      | Default               | Description                                                                           |
| ------------- | --------------------- | ------------------------------------------------------------------------------------- |
| `BASE_URL`    | `/`                   | Base path where the app is served (must start and end with `/`, for example `/gui/`). |
| `API_HOST`    | `http://gateway:5000/api` | Upstream API base URL used by nginx for `/api` requests.                              |
| `SERVER_NAME` | `_`                   | nginx `server_name` value.                                                            |

### Example

```bash
docker run --rm -p 8080:80 \
  -e BASE_URL=/gui/ \
  -e API_HOST=https://api.example.org/ \
  -e LISTEN_PORT=80 \
  -e SERVER_NAME=_ \
  epos-gui:latest
```

If you deploy at root, keep `BASE_URL=/`.

