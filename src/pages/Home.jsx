import React from "react";
import Landing from "../components/Home/Landing";
import Stem from "../components/Home/Stem";
import Contact from "../components/Home/Contact";
import Membrii from "../components/Home/Membrii";
import Premii from "../components/Home/Premii";
import Up from "../components/Home/Up";
import Sponsori from "../components/Home/Sponsori";

function Home() {
  return (
    <>
      <Landing />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptate, consequatur quisquam ipsam voluptatem rerum a odit architecto est dignissimos velit nesciunt dolorem eum sit iure soluta illum quam obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos, ea non, reprehenderit assumenda nulla praesentium tempora dolore debitis ab vel earum facilis molestias illum tempore perferendis sit aliquam provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illo velit, aliquam aperiam, ipsum quod nisi, neque quisquam quibusdam iste iusto optio. Repellat natus optio architecto ea a sapiente pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis libero quaerat ipsa soluta impedit deleniti vitae, suscipit enim architecto harum velit vel placeat laudantium tenetur itaque. Suscipit blanditiis saepe quam?
      <Stem />
      <Contact />
      <Membrii ok={false} />
      <Premii />
      <Sponsori />
      <Up />
    </>
  );
}

export default Home;
