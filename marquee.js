class Marquee {
    constructor(data, dataEL, getText) {
		this.data = data;
		this.dataEL = dataEL;
        this.getText = getText;
	}

	showMarquee() {
		for (let item of this.data) {
            let marqueeItem = document.createElement("span");
            marqueeItem.className = 'marqueeItem';
            marqueeItem.innerHTML = this.getText(item);
            this.dataEL.appendChild(marqueeItem);
            
		}
	}

    
}

export default Marquee;

