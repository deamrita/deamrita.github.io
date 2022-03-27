
	'use strict';

    let work_data = {
        "Python" : {"link":["https://github.com/deamrita/customer_segmentation","https://github.com/deamrita/AB_testing_ecom_website"],
                    "image_urls":["images/p1.jpg","images/p2.jpg"],
                    "a_links_texts":["Customer segmentation of a supermarket using K means clustering","AB testing for a new version of e-commerce site"],
                    "project_span_texts":["Build an unsupervised model to segment the customers of a popular supermarket store based on their RFM score.",
                    "Ran an A/B testing in Jupyter Notebook to check if the new version of an e-commerce website will perform better or worse in terms of conversion rate."]
                    },
        // "R" : {"link":["https://www.r-project.org/"],
        // "image_urls":["images/coming soon.jpeg"],
        // "a_links_texts":["I am Still exploring and learning R"],
        // "project_span_texts":["Feel free to suggest me some interesting projects on R"]
        // },
        "Tableau" : {"link":["https://public.tableau.com/app/profile/amrita.de7431/viz/IIM_cal_casestudy_HRAnalytics/Story1","https://public.tableau.com/app/profile/amrita.de7431/viz/TableauSpotify_16388657936010/Dashboard1"],
        "image_urls":["images/HR.png","images/sf.png"],
        "a_links_texts":["HR Analytics Dashboard","Top 100 songs on Spotify"],
        "project_span_texts":["Three interactive dashboards in Tableau to deliver key insights into diversity profile, the satisfaction of employees, recruiting sources & pay and attrition.",
        "Top 100 played songs on Spotify"]
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
