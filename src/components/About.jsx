import Layout from "./layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="about-box mx-32">
        <div className="about-data flex gap-4 my-5">
          <div className="about-img">
            <img
              src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80"
              alt="aboutimg"
              className="h-[20em] w-[100em] rounded-full"
            />
          </div>
          <div>
            <h1 className="font-bold text-5xl">About the Library</h1>
            <p className="about-text flex items-center justify-center mt-8">
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
              
            </p>
          </div>
        </div>

        {/* New Section: About Library Management System */}
        <div className="about-library-section mt-8">
          <h3 className="text-2xl font-semibold mb-4">
            About Library Management System
          </h3>
          <p>
            Our library management system is designed to provide a seamless and
            efficient experience for library patrons and staff. Here are some
            key features:
          </p>
          {/* Details Cards */}
          <div className="details-cards  my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-semibold mb-2">Smart Catalog</h4>
              <p>
                Explore our extensive collection with a user-friendly catalog
                that makes finding books a breeze.
              </p>
            </div>
            <div className="card bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-semibold mb-2">Digital Resources</h4>
              <p>
                Access e-books, audiobooks, and other digital resources from the
                comfort of your device.
              </p>
            </div>
            <div className="card bg-white p-4 rounded-md shadow-md">
              <h4 className="text-lg font-semibold mb-2">
                Community Engagement
              </h4>
              <p>
                Participate in book clubs, events, and discussions to connect
                with fellow book enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
