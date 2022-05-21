
//**************************************************************************************************
// infoBox
// btnSet: 0 - без кнопок, 1 - OK, 2 - Да/Нет, 3 - Да/Нет/Отмена, 4 - Закрыть
//**************************************************************************************************

class infoBox {
	constructor(txt) {
		this.fog = {
			opacity: 0.4
		};
		this.title = {
			txt: ""
		};
		this.message = {
			txt: ""
		};
		if ( typeof(txt) == "string" ) this.message.txt = txt;
		this.btnSet = 1;
		this.elms = {};
	}
	show() {
		console.log(this.message.txt);
		// fog
		this.elms.fog = document.createElement("div");
		Object.assign(this.elms.fog.style, {
			position: "fixed",
			top: "0",
			left: "0",
			zIndex: "100500",
			width: "100%",
			height: "100%",
			overflow: "hidden",
			background: "rgba(0, 0, 0, " + this.fog.opacity + ")",
			outline: "none",
		});
		document.body.appendChild(this.elms.fog);
		// dialog
		this.elms.dialog = document.createElement("div");
		Object.assign(this.elms.dialog.style, {
			position: "relative",
			width: "auto",
			maxWidth: "500px",
			margin: "1.75rem auto",
			pointerEvents: "none",
			display: "flex",
			alignItems: "center",
			minHeight: "calc(100% - 1rem)",
		});
		this.elms.fog.appendChild(this.elms.dialog);
		// content
		this.elms.content = document.createElement("div");
		Object.assign(this.elms.content.style, {
			position: "relative",
			display: "flex",
			flexDirection: "column",
			width: "100%",
			pointerEvents: "auto",
			backgroundColor: "#fff",
			backgroundClip: "padding-box",
			border: "1px solid rgba(0, 0, 0, 0.2)",
			borderRadius: "0.3rem",
			outline: "none",
		});
		this.elms.dialog.appendChild(this.elms.content);
		// header
		this.elms.header = document.createElement("div");
		Object.assign(this.elms.header.style, {
			display: "flex",
			justifyContent: "space-between",
			padding: "0.3rem 0.7rem",
			borderBottom: "1px solid #dee2e6",
			borderTopLeftRadius: "0.3rem",
			borderTopRightRadius: "0.3rem",
		});
		this.elms.content.appendChild(this.elms.header);
		// title
		this.elms.title = document.createElement("h1");
		this.elms.title.innerHTML = this.title.txt;
		Object.assign(this.elms.title.style, {
			overflow: "hidden",
			whiteSpace: "nowrap",
			marginRight: "1rem",
			marginBottom: "0",
			alignSelf: "center",
			fontSize: "1.6rem",
		});
		this.elms.header.appendChild(this.elms.title);
		
	}
}

//**************************************************************************************************
