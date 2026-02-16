# Release Workflow

This directory contains the CI/CD pipeline defined in `release.yaml`.

## Goals

- Validate changes for pull requests to `main`.
- Run build, lint, and test checks on `main` and tags.
- Build and publish container images to GHCR for `main`, tags, and manual publish runs.
- Allow manual runs with explicit CI and image publishing controls.

## Trigger Matrix

| Event               | Ref                                   | build/lint | test | build-image | image push |
| ------------------- | ------------------------------------- | ---------: | ---: | ----------: | ---------: |
| `pull_request`      | `-> main`                             |        yes |  yes |          no |         no |
| `push`              | `main`                                |        yes |  yes |         yes |        yes |
| `push`              | tag (`*`)                             |        yes |  yes |         yes |        yes |
| `push`              | other branches                        |         no |   no |          no |         no |
| `workflow_dispatch` | `run_ci=true`, `publish_image=false`  |        yes |  yes |          no |         no |
| `workflow_dispatch` | `run_ci=false`, `publish_image=true`  |        yes |   no |         yes |        yes |
| `workflow_dispatch` | `run_ci=true`, `publish_image=true`   |        yes |  yes |         yes |        yes |
| `workflow_dispatch` | `run_ci=false`, `publish_image=false` |         no |   no |          no |         no |

## Manual Run Inputs (`workflow_dispatch`)

- `run_ci`: runs `build`, `lint`, and `test`.
- `publish_image`: runs `build-image` and pushes to GHCR.

Notes:

- `build-image` depends on artifacts produced by `build`, so `build` and `lint` run when `publish_image=true` even if `run_ci=false`.
- `test` is controlled only by `run_ci`.
- If both inputs are `false`, all jobs are skipped.

## Image Tags

- Push to `main`: `main` and `sha-<commit>`.
- Push tag (for example `v1.2.3`): `<tag>`, `latest`, and `sha-<commit>`.
- Manual publish from a non-main branch: `sha-<commit>` only.

## Practical Examples

- Validate a PR to `main`: open or update a PR and CI runs automatically.
- Publish image from a feature branch manually: run workflow on that branch with `publish_image=true`.
- Run full manual verification without publishing: run workflow with `run_ci=true` and `publish_image=false`.
