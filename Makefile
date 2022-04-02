.PHONY: dev
dev:
	echo "http://localhost:8000"
	cd src && caddy file-server --listen :8000 --browse


SFTP_PATH = "towns.dreamhost.com:~/garron.net/app/iss-sim/"
URL       = "https://garron.net/app/iss-sim/"

.PHONY: deploy
deploy:
	rsync -avz \
		--exclude .DS_Store \
		--exclude .git \
		iss-sim.spacex.com/ \
		${SFTP_PATH}
	echo "\nDone deploying. Go to ${URL}\n"
