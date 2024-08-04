import React from 'react';
import Header from '../_components/Header';
import Contacts from '../_components/Contact';
import contact_footer from '../_components/contact_footer';

function Contact() {
  return (
    <div>
      <Header />
      <Contacts />
      <contact_footer />
    </div>
  )
}

export default Contact