
import React from 'react';

const Tutorials=()=>{
    return(
        <div className="inner-content">
            <h1>Tutorials</h1>
            <p>Booking demo requires to have one of Booking plugin for woocommerce if you want to have booking features (they are not included in theme). We recommend to use one of next plugins</p>
            <ol className='orderList'>
                <li> Woocommerce Booking (supported by all Multi vendor plugins)</li>
                <li>Woocommerce Appointment (supported only by WCFM) </li>
                <li>Woocommerce Booking and Rental (supported only by WCFM) </li>
                <li>If you need additionally Product or Vendor Locator features, please, check next tutorial</li>
            </ol>

        <p>For adding Multivendor options with Booking plugin, we recommend next plugins: WCFM (free or ultimate), Dokan PRO + Dokan Booking addon</p>

        <p>After installing multi vendor plugin, please go to Theme option – header option and set correct link for Button in header. You must set there link of your vendor dashboard (or any other page which for product submit)</p>

        <p>Check also our Step By step Guide for Multivendor plugin and other useful links</p>
        <ol className='orderList'>
                <li> Creating Multivendor site with Rehub</li>
                <li>How to know what error do you have on WordPress site  </li>
                <li>Woocommerce settingsWoocommerce Booking and Rental (supported only by WCFM) </li>
                <li>If you need additionally Product or Vendor Locator features, please, check next tutorial</li>
            </ol>

        </div>
    )
}
export default Tutorials;