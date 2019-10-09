module.exports.utils = {
  getOAuth2Url: type => {
    fetch("https://localhost:8081/integration", {
      method: "PUT",
      body: JSON.parse({ type: type })
    })
      .then(res => res.json())
      .then(resp => {
        return resp;
      });
  },

  openYoutubeOAuth2: () => {
    window.open(
      await getUrl("youtube"),
      "popUpWindow",
      "height=700,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no"
    );
  }
};
