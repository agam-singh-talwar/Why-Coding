
export default function Home() {
  return (
    <>
    <div class="row">
        <div className="col-3 col-auto">
        <div class="card" >
          <div class="card-header">
            Featured
          </div>
          <ul class="list-group list-group-flush">
            <a class="list-group-item">Cras justo odio</a>
            <a class="list-group-item">Dapibus ac facilisis in</a>
            <a class="list-group-item">Vestibulum at eros</a>
          </ul>
        </div>
        </div>
        <div className="col-9">
        <div class="card">
          <div class="card-body">
            <h1 className="card-title">Welcome to the <span className=" card-title text-success bg-light">Honours Bachelor of Software Development</span> website!🤓!</h1>
            <br/>
            <p class="card-text">Our website is designed to provide <span className="text-danger" > insights</span>🧠 and a <span className="text-warning"> headstart</span>🚀 to new students who are pursuing the Honours Bachelor of Software Development degree. We are a group of former and current students who are passionate about software development and want to share our knowledge and experience with others.</p>
            <br/>
            Our website includes a range of resources that will be useful to new students, including:
            <br/><br/>
            <ul className="bulletStyled">
              <li>A student side's comprehensive overview of the Honours Bachelor of Software Development program, including curriculum, and learning outcomes.</li>
              <li>Tips and advice for succeeding in the program, including study strategies, time management techniques, and effective ways to collaborate with peers and instructors.</li>
              <li>Links to profiles of former and current students, including their experiences in the program and their career paths after graduation.</li>
            </ul>
            We are committed to providing a supportive and inclusive community for all students in the Honours Bachelor of Software Development program. Whether you are just starting out or are already well on your way to graduation, we hope that our website will be a valuable resource for you.
            <br/><br/>
            Thank you for visiting our website, and we wish you all the best in your studies and future career in software development!
            <br/>
            <br/>
            <a href="/curriculum" class="card-link">Curriculum</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <br/>
        </div>
      </div>
    </>
  )
}
