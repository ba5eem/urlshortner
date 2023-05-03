
const serverName = "http://localhost:8080"

const appData = {
	listContainersURL: `${serverName}/listcontainers`,
	runContainerURL: `${serverName}/run`,
	stopContainerURL: `${serverName}/stop`,
	restartContainerURL: `${serverName}/restart`,
	shortenURL: `${serverName}/shorten`,
	getOrgURL: serverName,
	apache:"http://localhost:9090",
	matlab: "http://localhost:8888",
	grafana: "http://localhost:4000",
	jupyter: "http://127.0.0.1:4444"
}



export default appData;