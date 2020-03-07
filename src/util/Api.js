import fetchx from "@/util/fetch.js";
export default {
  Host: process.env.VUE_APP_SERVER_HOST,
  Api: {
    login: "/api/users/login",
    user: "/api/users/user"
  },
  removeEmptyKey(search) {
    for (var key in search) {
      if (search[key] === null || search[key] === "") {
        delete search[key];
      }
    }
    return search;
  },
  /* eslint-disable */
  timeBuilder(beginDate, beginTime) {
    return (
      beginDate.getFullYear() +
      "-" +
      (new Number(beginDate.getMonth()) + 1) +
      "-" +
      beginDate.getDate() +
      " " +
      beginTime
    );
  },
  timeBuilder(beginDate, beginTime, during) {
    return (
      beginDate.getFullYear() +
      "-" +
      (new Number(beginDate.getMonth()) + 1) +
      "-" +
      beginDate.getDate() +
      " " +
      beginTime
    );
  },
  stringCat(a, b, c) {
    return a + " " + b + " " + c;
  },
  isEmail(str) {
    try {
      if (str !== null && str.length > 0) {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(str);
      }
    } catch (e) {
      return true;
    }
  },
  easyfetch(api, data) {
    let fx = "{}";
    if (data != null) {
      this.removeEmptyKey(data);
      fx = JSON.stringify(data);
    }
    return new Promise(resolve => {
      fetchx({
        method: "Post",
        url: this.Host + api,
        data: fx
      })
        .then(res => {
          resolve(res);
        })
        .catch();
    });
  },
  fetchFile(api, data) {
    let fx = "{}";
    if (data != null) {
      fx = JSON.stringify(data);
    }
    console.log(fx);
    return new Promise(resolve => {
      fetchx({
        method: "Post",
        url: this.Host + api,
        data: fx,
        responseType: "blob"
      })
        .then(res => {
          console.log(res);
          let dax = res.data;
          if (!dax) {
            return
          }
          let url = window.URL.createObjectURL(new Blob([dax]));
          let link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.setAttribute("download", "export.xlsx");
          document.body.appendChild(link);
          link.click();
          resolve(res);
        })
        .catch();
    });
  },
  getRandomColor() {
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += ((Math.random() * 12 + 4) | 0).toString(16);
    }
    return color;
  }
};
