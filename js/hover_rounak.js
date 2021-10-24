
	'use strict';

    let work_data = {
        "Python" : {"link":["https://github.com/deamrita/Investigating-Netflix-Movies","https://github.com/deamrita/App-Market-Analysis-on-PlayStore"],
                    "image_urls":["images/nf.jpg","images/playstore.jpg"],
                    "a_links_texts":["Invesgating Netflix Movies","App Market Analysis on PlayStore"],
                    "project_span_texts":["Applying the foundational Python skills by manipulating and visualizing movie and TV data.",
                    "Load, clean, and visualize scraped Google Play Store data to gain insights into the Android app market."]
                    },
        "R" : {"link":[],
        "image_urls":["images/coming soon.jpeg"],
        "a_links_texts":["I am Still exploring and learning R"],
        "project_span_texts":[]
        },
        "Tableau" : {"link":["https://public.tableau.com/app/profile/amrita.de7431/viz/ICCT20WC_DataAnalysis/Dashboard1","https://public.tableau.com/app/profile/amrita.de7431/viz/CovidDashboardOct21/Covid19Dashboardworldwide"],
        "image_urls":["images/t1.png","images/t2.png"],
        "a_links_texts":["ICCT20WC_DataAnalysis","Covid Dashboard Oct21"],
        "project_span_texts":["As the ICC Men's T20 World Cup 2021 has been started, here is a Tableau Visualization of records from past seasons (2007 to 2016) including different viz. like Top Batters with most runs, Best Strike Rates, most no of 6's, players with most no. of catches.",
        "Worldwide Covid19 Data Viz for Oct2021."]
        },
        "SQL" :{"link":["https://github.com/deamrita/ICC-T20-WC-Data-Analysis","https://github.com/deamrita/SQLPortfolioProject1"],
        "image_urls":["images/cricket.jpeg","images/covid.jpeg"],
        "a_links_texts":["ICC-T20-WC-Data-Analysis","Worldwide Covid Data analysis Oct21"],
        "project_span_texts":["As the ICC Men's T20 World Cup 2021 has been started, here is a Data Analysis of records from past seasons (2007 to 2016) including different viz. like Top Batters with most runs, Best Strike Rates, most no of 6's, players with most no. of catches.",
        "Worldwide Covid19 Data Analysis for Oct2021."]
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
