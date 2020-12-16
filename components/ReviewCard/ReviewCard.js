/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from "react";
import styles from "./ReviewCard.scss";


const ReviewCard = () => {
  const [resData, setResData] = useState([]);
  const apiURL = `https://api.web.movewithcleverdev.com/staging/review-card-interview?slug=test-review-1`;
  const getData = () => fetch(apiURL).then((res) => res.json());
  useEffect(() => {
    getData().then((data) => setResData(data));
  }, [resData]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={resData.image_url} alt="" />
      <h1 className={styles.title}>{resData.title}</h1>
      <a href='#' className={styles.link} alt=''>Link goes here</a>
      
        <Tabs tabContent={testTabs}/>

    </div>
  );
};

const Tabs = (props) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [open, setOpen] = useState(false);
  const listLabels = props.tabContent.map((item, i) => (
    <li
      onClick={() => setCurrentTab(i)}
      className={currentTab === i ? `${styles.tab_label_active} ${styles.tab_label}` : `${styles.tab_label}`}
      key={i}
    >
      {item.title}
    </li>
  ));

  const listContent = props.tabContent.map((item, i) => (
    <div 
      className={open ? `${styles.tab_content} ${styles.tab_open}` : `${styles.tab_content} ${styles.tab_closed}`} 
      style={currentTab === i ? {} : { display: "none" }} 
      dangerouslySetInnerHTML={{__html: item.content}} />
  ));

  return (
    <div className={styles.tabs}>
      <ul className={styles.tab_label_list}>{listLabels}</ul>
      <div className={styles.tab_content_wrapper}>{listContent}</div>
      <button
        className={styles.show_more_btn}
        onClick={() => {
          setOpen(!open)
        }}
      >
        {open ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default ReviewCard;


const testTabs = [
  {
    title: "Description",
    content: `<ul>
<li>Houzeo is a flat-fee MLS referral service that connects you with Wisconsin brokers and agents who will list your home on your local MLS for a pre-negotiated rate</li>
<li>Draft your listing, upload photos, set your price, and sign MLS contracts via Houzeo&rsquo;s online dashboard</li>
<li>Autofills listing details using publicly available info about your home to expedite the listing process</li>
<li>Home valuation not included in service</li>
<li>Does not require that you offer buyer&rsquo;s agent commission</li>
<li>Listing is typically live within 24 hours of submission</li>
</ul>`,
  },
  {
    title: "Pricing",
    content: `<table style="width: 100%;">
<tbody>
<tr>
<td style="width: 50.0000%;"><strong>$275 - Bronze</strong>
<ul>
<li>3-month listing on MLS</li>
<li>6 Photos</li>
<li>Virtual tour</li>
<li>$25 for each listing change</li>
<li>Syndicated to Zillow, Trulia, Realtor.com, and more</li>
</ul><strong>$325 - Silver</strong>
<ul>
<li>Same as Bronze plan, plus:</li>
<li>6-month listing on MLS</li>
<li>24 Photos</li>
<li>10 free listing changes</li>
<li>Select and communicate with Escrow Agent</li>
</ul>
</td>
<td style="width: 50.0000%;"><strong>$375 - Gold</strong>
<ul>
<li>Same as Silver plan, plus:</li>
<li>Max photos allowed by MLS</li>
<li>Federal and state disclosures forms</li>
</ul>
</td>
</tr>
</tbody>
</table>`,
  },
  {
    title: "Pros & Cons",
    content: `<p><strong>Pros</strong></p>
<ul>
<li>Free cancellation anytime (no refunds)</li>
<li>Freedom to specify any buyer&rsquo;s agent commission</li>
<li>Listings typically go live within 24 hours</li>
</ul>
<p><strong>Cons</strong></p>
<ul>
<li>Limited coverage in rural areas</li>
<li>&ldquo;Free changes&rdquo; only apply to listing&rsquo;s price, status, and property description; $10 for additional changes</li>
</ul>`,
  },
];