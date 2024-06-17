const data = [
    { imgsrc: 'image/p1.jpeg', features: ['High-speed Processor', 'Long Battery Life', 'Sleek Design', 'High-Resolution Display', 'Water Resistant', 'Wireless Charging'] },
    { imgsrc: 'image/p2.jpeg', features: ['Advanced Camera System', 'Fast Charging', 'AI Integration', 'Multi-Touch Screen', 'Biometric Security', 'Expandable Storage'] },
    { imgsrc: 'image/p1.jpeg', features: ['Noise Cancellation', 'Bluetooth Connectivity', 'Ergonomic Fit', 'Sweat Resistant', 'Customizable Sound', 'Voice Assistant'] },
    { imgsrc: 'image/p2.jpeg', features: ['Ultra HD Display', 'Surround Sound', 'Smart Home Integration', 'Energy Efficient', 'Multiple HDMI Ports', 'Remote Control'] },
    { imgsrc: 'image/p1.jpeg', features: ['Lightweight Frame', 'High Durability', 'UV Protection', 'Scratch Resistant', 'Adjustable Fit', 'Stylish Design'] },
    { imgsrc: 'image/p2.jpeg', features: ['4K Video Recording', 'Image Stabilization', 'Wide-Angle Lens', 'High ISO Range', 'Fast Autofocus', 'Weather Sealed'] },
    { imgsrc: 'image/p1.jpeg', features: ['Fast Boot Time', 'Large Storage Capacity', 'High RAM', 'VR Ready', 'Customizable RGB Lighting', 'Advanced Cooling System'] },
    { imgsrc: 'image/p2.jpeg', features: ['High-Resolution Audio', 'Long Battery Life', 'Comfortable Ear Cushions', 'Foldable Design', 'Built-in Microphone', 'Multi-Device Pairing'] },
    { imgsrc: 'image/p1.jpeg', features: ['Smart Navigation', 'Automatic Cleaning', 'Obstacle Detection', 'Voice Control', 'Long Battery Life', 'Self-Charging'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Data Transfer', 'Compact Design', 'High Capacity', 'Durable Construction', 'USB-C Interface', 'Password Protection'] },
    { imgsrc: 'image/p1.jpeg', features: ['Multiple Cleaning Modes', 'Eco-Friendly', 'Quiet Operation', 'Large Water Tank', 'Easy Refill', 'LED Indicators'] },
    { imgsrc: 'image/p2.jpeg', features: ['Smart Tracking', 'Heart Rate Monitor', 'Sleep Analysis', 'Waterproof', 'Long Battery Life', 'Customizable Watch Faces'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Resolution', 'Wide Color Gamut', 'Fast Refresh Rate', 'Low Input Lag', 'HDR Support', 'Adjustable Stand'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Torque Motor', 'Lightweight Design', 'Long Battery Life', 'Ergonomic Handle', 'Multiple Attachments', 'Cordless'] },
    { imgsrc: 'image/p1.jpeg', features: ['Fast Heating', 'Energy Efficient', 'Auto Shut-Off', 'Multiple Heat Settings', 'Cool Touch Exterior', 'Compact Design'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Ergonomic Design', 'Wireless Connectivity', 'Customizable Buttons', 'Long Battery Life', 'Adjustable DPI'] },
    { imgsrc: 'image/p1.jpeg', features: ['Wide Range of Motion', 'Compact Design', 'Adjustable Height', 'Easy to Assemble', 'Durable Construction', 'Silent Operation'] },
    { imgsrc: 'image/p2.jpeg', features: ['Multi-Function Display', 'Pulse Sensor', 'Adjustable Resistance', 'Compact Design', 'Smooth Operation', 'Easy Storage'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Suction Power', 'Lightweight', 'Cordless', 'Long Battery Life', 'HEPA Filter', 'Multiple Attachments'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Internet Speed', 'Wide Coverage', 'Multiple Device Support', 'Easy Setup', 'Parental Controls', 'Secure Connection'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Accuracy', 'Easy Calibration', 'Durable Build', 'Compact Size', 'Multiple Units of Measure', 'Backlit Display'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Auto-Calibration', 'Large LCD Display', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Refresh Rate', 'Adaptive Sync', 'Wide Color Gamut', 'Low Blue Light', 'Adjustable Stand', 'Slim Bezel'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Data Transfer', 'Compact Design', 'High Capacity', 'Durable Construction', 'USB-C Interface', 'Password Protection'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Performance', 'Lightweight', 'Energy Efficient', 'Quiet Operation', 'Sleek Design', 'Durable Build'] },
    { imgsrc: 'image/p2.jpeg', features: ['Advanced AI Features', 'Voice Control', 'Customizable Settings', 'High Security', 'Cloud Storage', 'Frequent Updates'] },
    { imgsrc: 'image/p1.jpeg', features: ['Multi-Layer Protection', 'Fast Charging', 'High Capacity', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Ergonomic Design', 'Wireless Connectivity', 'Customizable Buttons', 'Long Battery Life', 'Adjustable DPI'] },
    { imgsrc: 'image/p1.jpeg', features: ['Wide Range of Motion', 'Compact Design', 'Adjustable Height', 'Easy to Assemble', 'Durable Construction', 'Silent Operation'] },
    { imgsrc: 'image/p2.jpeg', features: ['Multi-Function Display', 'Pulse Sensor', 'Adjustable Resistance', 'Compact Design', 'Smooth Operation', 'Easy Storage'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Suction Power', 'Lightweight', 'Cordless', 'Long Battery Life', 'HEPA Filter', 'Multiple Attachments'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Internet Speed', 'Wide Coverage', 'Multiple Device Support', 'Easy Setup', 'Parental Controls', 'Secure Connection'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Accuracy', 'Easy Calibration', 'Durable Build', 'Compact Size', 'Multiple Units of Measure', 'Backlit Display'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Auto-Calibration', 'Large LCD Display', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Refresh Rate', 'Adaptive Sync', 'Wide Color Gamut', 'Low Blue Light', 'Adjustable Stand', 'Slim Bezel'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Data Transfer', 'Compact Design', 'High Capacity', 'Durable Construction', 'USB-C Interface', 'Password Protection'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Performance', 'Lightweight', 'Energy Efficient', 'Quiet Operation', 'Sleek Design', 'Durable Build'] },
    { imgsrc: 'image/p2.jpeg', features: ['Advanced AI Features', 'Voice Control', 'Customizable Settings', 'High Security', 'Cloud Storage', 'Frequent Updates'] },
    { imgsrc: 'image/p1.jpeg', features: ['Multi-Layer Protection', 'Fast Charging', 'High Capacity', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Ergonomic Design', 'Wireless Connectivity', 'Customizable Buttons', 'Long Battery Life', 'Adjustable DPI'] },
    { imgsrc: 'image/p1.jpeg', features: ['Wide Range of Motion', 'Compact Design', 'Adjustable Height', 'Easy to Assemble', 'Durable Construction', 'Silent Operation'] },
    { imgsrc: 'image/p2.jpeg', features: ['Multi-Function Display', 'Pulse Sensor', 'Adjustable Resistance', 'Compact Design', 'Smooth Operation', 'Easy Storage'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Suction Power', 'Lightweight', 'Cordless', 'Long Battery Life', 'HEPA Filter', 'Multiple Attachments'] },
    { imgsrc: 'image/p2.jpeg', features: ['Fast Internet Speed', 'Wide Coverage', 'Multiple Device Support', 'Easy Setup', 'Parental Controls', 'Secure Connection'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Accuracy', 'Easy Calibration', 'Durable Build', 'Compact Size', 'Multiple Units of Measure', 'Backlit Display'] },
    { imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Auto-Calibration', 'Large LCD Display', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
   	{ imgsrc: 'image/p2.jpeg', features: ['High Precision', 'Auto-Calibration', 'Large LCD Display', 'Durable Construction', 'Compact Design', 'Easy to Use'] },
    { imgsrc: 'image/p1.jpeg', features: ['High Refresh Rate', 'Adaptive Sync', 'Wide Color Gamut', 'Low Blue Light', 'Adjustable Stand', 'Slim Bezel'] } ]

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
            link.href=url
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