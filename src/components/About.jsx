import Layout from "./layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="about-box mx-32">
        <h2 className="about-title font-semibold">About the Library</h2>
        <div className="about-data flex gap-4 my-5">
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
              alt="aboutimg"
              className="h-[35em] w-[100em]"      
            />
          </div>
          <div>
            <p className="about-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
              <br />
              <br />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage.
              <br />
              <br />
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
              <br />
              <br />
              Your suggestions for improvement are always welcome!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
