
	'use strict';

    let work_data = {
        "Python" : {"link":["https://github.com/deamrita/Investigating-Netflix-Movies","https://github.com/deamrita/App-Market-Analysis-on-PlayStore"],
                    "image_urls":["images/nf.jpg","images/playstore.jpg"],
                    "a_links_texts":["Invesgating Netflix Movies","App Market Analysis on PlayStore"],
                    "project_span_texts":["Applying the foundational Python skills by manipulating and visualizing movie and TV data.",
                    "Load, clean, and visualize scraped Google Play Store data to gain insights into the Android app market."]
                    },
        "R" : {"link":["https://github.com/deamrita/Investigating-Netflix-Movies","https://github.com/deamrita/App-Market-Analysis-on-PlayStore"],
        "image_urls":["images/nf.jpg","images/playstore.jpg"],
        "a_links_texts":["Give R Link Text here","GIve R link text here 2"],
        "project_span_texts":["Give R desc here",
        "Give R desc here for project2"]
        },
        "Tableau" : {"link":["https://github.com/deamrita/Investigating-Netflix-Movies","https://github.com/deamrita/App-Market-Analysis-on-PlayStore"],
        "image_urls":["images/nf.jpg","images/playstore.jpg"],
        "a_links_texts":["Invesgating Netflix Movies","App Market Analysis on PlayStore"],
        "project_span_texts":["Applying the foundational Python skills by manipulating and visualizing movie and TV data.",
        "Load, clean, and visualize scraped Google Play Store data to gain insights into the Android app market."]
        },
        "SQL" :{"link":["https://github.com/deamrita/Investigating-Netflix-Movies","https://github.com/deamrita/App-Market-Analysis-on-PlayStore"],
        "image_urls":["images/sql_img.png","images/playstore.jpg"],
        "a_links_texts":["Invesgating Netflix Movies","App Market Analysis on PlayStore"],
        "project_span_texts":["Applying the foundational Python skills by manipulating and visualizing movie and TV data.",
        "Load, clean, and visualize scraped Google Play Store data to gain insights into the Android app market."]
        }
    };
    var workAccordionToggle = (element)=>{
        $('.rn').removeClass('active');
        element.classList.add("active");
        $("#d_tg_1").css('background-image','url('+work_data[element.text].image_urls[0]+')');
        $("#d_tg_2").css('background-image','url('+work_data[element.text].image_urls[1]+')');
        $("#a_tg_1").attr('href',work_data[element.text].link[0]).text(work_data[element.text].a_links_texts[0]);
        $("#a_tg_2").attr('href',work_data[element.text].link[1]).text(work_data[element.text].a_links_texts[1]);
        $("#s_tg_1").text(work_data[element.text].project_span_texts[0]);
        $("#s_tg_2").text(work_data[element.text].project_span_texts[1]);
    }

    function updateData(element){
        workAccordionToggle(element);
    }
