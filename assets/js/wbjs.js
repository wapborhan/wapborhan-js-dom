document.body.onload = addElement;

function addElement() {
  //Pick Root
  const root = document.getElementById("root");

  // <main-page-wrapper>
  const mainwrapper = document.createElement("div");
  mainwrapper.classList = "main-page-wrapper";
  root.appendChild(mainwrapper);

  // <main-page-wrapper> <rn-header-image-area>
  const rnHeader = document.createElement("div");
  rnHeader.classList = "rn-header-image-area";
  mainwrapper.appendChild(rnHeader);

  // <main-page-wrapper> <rn-header-image-area> <bg_image--9 bg_image h-100 Create>
  const bgImage9 = document.createElement("div");
  bgImage9.classList.add("bg_image--9", "bg_image", "h-100");
  rnHeader.appendChild(bgImage9);

  // <main-page-wrapper> <rn-content-wrapper>
  const rnContent = document.createElement("div");
  rnContent.classList.add("rn-content-wrapper");
  mainwrapper.appendChild(rnContent);

  // <main-page-wrapper> <rn-content-wrapper> <container>
  const container = document.createElement("div");
  container.classList.add("container");
  rnContent.appendChild(container);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row>
  const row = document.createElement("div");
  row.classList.add(
    "row",
    "padding-tb",
    "m_dec-top",
    "align-items-center",
    "d-flex"
  );
  container.appendChild(row);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1
  const col6_1 = document.createElement("div");
  col6_1.classList.add("col-lg-6");
  row.appendChild(col6_1);
  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 2
  const col6_2 = document.createElement("div");
  col6_2.classList.add("col-lg-6");
  row.appendChild(col6_2);

  //<main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left>
  const headerl = document.createElement("div");
  headerl.classList.add("header-left");
  col6_1.appendChild(headerl);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-thumbnail>
  const headert = document.createElement("div");
  headert.classList.add("header-thumbnail");
  headerl.appendChild(headert);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-thumbnail> <img>
  const psimage = document.createElement("img");
  psimage.setAttribute("src", "assets/images/logo/banner-02.png");
  psimage.setAttribute("alt", "Borhan");
  headert.appendChild(psimage);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-info-content>
  const headerInCon = document.createElement("div");
  headerInCon.classList.add("header-info-content");
  headerl.appendChild(headerInCon);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-info-content> <h4>
  const headInh4 = document.createElement("h4");
  headInh4.classList.add("title");
  headerInCon.appendChild(headInh4);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-info-content> <h4> <a>
  const headInh4a = document.createElement("a");
  headInh4a.setAttribute("href", "http://www.wapborhan.com");
  headInh4a.innerText = "Borhan Uddin";
  headInh4.appendChild(headInh4a);

  // <main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-info-content> <status-info>
  const headInst = document.createElement("div");
  headInst.classList.add("status-info");
  headInst.innerText = "I am a Front-End Developer";
  headerInCon.appendChild(headInst);

  //<main-page-wrapper> <rn-content-wrapper> <container> <row> <col-lg-6> - 1 <header-left> <header-info-content> <social-share-style-1>
  const headInsl = document.createElement("div");
  headInsl.classList.add("social-share-style-1", "border-none", "mt--40");
  headerInCon.appendChild(headInsl);
}
