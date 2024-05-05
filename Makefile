.PHONY: dev
dev:
	echo "http://localhost:1998"
	cd src && caddy file-server --listen :1998 --browse

.PHONY: deploy
deploy:
	bun x @cubing/deploy
