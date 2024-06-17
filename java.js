const data = [
    {imgsrc: 'image/p1.jpeg',features: ['• Drag Headshot','• One Time Apply','• Unable To By(By Checking)','• Fully AI Control','• 100% No Ban Issue(Even Patch)','• Android & IOS']},
    {imgsrc: 'image/p5.jpg',features: ['• DRAG AIMBOT','• HEADLOCK','• AIMFOV','• MACRO AIMBOT','• MACRO AIMBOT','• 100% RANK PUSH PANEL','• NO RECOIL','• NO BACKLIST']},
    {imgsrc: 'image/p3.png',features: ['• SENSI-UPGRADE','• PREMIUM-SETEDIT','• Movement_Speed_Smooth','• Less Recoil Regedit','• PREMIUM APPS','* X,Y Fileds']},
    {imgsrc: 'image/p4.png',features: ['• Drag Headshot 3.0 ','• One Time Apply','• Unable To By(By Checking)','• Fully AI Control','• 100% No Ban Issue(Even Patch)','• Android & IOS']},
    {imgsrc: 'image/op.jpg',features: ['* Custom Regedit','* Emulators','* FPS lock upto 160','* Less Recoil Regedit','* Premium Tweaks','* X,Y Fileds']},
    {imgsrc: 'image/p5.jpg',features: ['* Custom Regedit','* Emulators','* FPS lock upto 160','* Less Recoil Regedit','* Premium Tweaks','* X,Y Fileds']},
   ] 

 
function addProduct(src,featureTexts) {
	
	const details=`
Hi,
I Need a Product From You👇
*Product Details:*
ο ${featureTexts.join('\nο ')}

*Link* : ${window.location.hostname+'/product/'+src}
`	
const url="https://api.whatsapp.com/send?phone=9345916715&text="+encodeURIComponent(details)
	
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.classList.add('hidden');


            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image');
            const img = document.createElement('img');
            img.src = src;
            imageDiv.appendChild(img);

            const featuresList = document.createElement('li');
            featuresList.classList.add('features');
            featuresList.textContent = 'Features:';
           


            featureTexts.forEach(text => {
                const p = document.createElement('p');
                p.textContent = text;
                featuresList.appendChild(p);
            });

            const button=document.createElement('div')
            button.classList='btn_cont'
            const link=document.createElement('a')
            link.href=url;
            link.textContent='Buy Now'
            link.classList='btn'
 
            button.appendChild(link)

            productDiv.appendChild(imageDiv);
            productDiv.appendChild(featuresList);
            productDiv.appendChild(button);

            const container = document.querySelector('.pro_container');
            container.appendChild(productDiv);
        }

data.map(items=>addProduct(items.imgsrc,items.features))

let observer;
try{
 observer =new IntersectionObserver((entries)=>{

	entries.forEach((entry)=>{
		if(entry.isIntersecting){
			entry.target.classList.add('show')
		}
		else{
			entry.target.classList.remove('show')

		}
	})
})

}
catch(e){
	hidden_ele=document.querySelectorAll('.hidden');

	hidden_ele.forEach((ele)=>{
			ele.classList.add('show')

	})
}

hidden_ele=document.querySelectorAll('.hidden');
hidden_ele.forEach(el=>observer.observe(el))