import axios from 'axios'
let auth = false;
let table = "";
let id = "";
let header = localStorage.getItem('auth._token.local');
let that = this;
let urlBASE = auth ? "http://localhost:8080/auto/api2.php" : "http://localhost:8080/auto/api.php";
class autophp {
    collection(tables) {
        table = tables;
        return this;
    }
    doc(ids) {
        if (ids) {
            // that.vdata.id = ids;
            id = ids;
        }
        return this;
    }
    async set(vdata) {
        let fd = new FormData();
        if (id != "") {
            vdata.id = id;
        }
        if (auth) {
            fd.append('header', header)
        }
        fd.append("table", table);
        fd.append("data", JSON.stringify(vdata));
        fd.append("type", "set");
        fd.append("key", getKey(vdata));

        function getKey(data) {
            return Object.keys(data);
        }
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        });
    }
    async get(vdata) {
        let fd = new FormData();
        fd.append("table", table);
        if (auth) {
            fd.append('header', header)
        }
        fd.append("select", vdata);
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "get");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        });
    }
    async delete(vdata) {
        let fd = new FormData();
        if (auth) {
            fd.append('header', header)
        }
        fd.append("table", table);
        fd.append("select", vdata);
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "delete");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        });
    }
    async select(vdata) {
        let fd = new FormData();
        if (auth) {
            fd.append('header', header)
        }
        fd.append("table", table);
        fd.append("select", vdata);
        if (id.length != "") {
            fd.append("id", `${id}`);
        }
        fd.append("type", "select");
        return await axios.post(urlBASE, fd).then(res => {
            console.log(res);
            return res.data;
        });
    }
}

export default autophp