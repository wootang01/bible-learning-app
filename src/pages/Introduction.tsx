import React from 'react'

const Introduction: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Welcome to Bible Learning</h2>
        <p className="mb-4">
          This resource is designed to help Hong Kong secondary school students explore and understand the Bible.
          Whether you're new to reading the Bible or have some experience already, we hope this guide will help
          deepen your understanding and enrich your English language skills.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">What is the Bible?</h2>
        <p className="mb-4">
          The Bible is a collection of sacred texts that is central to Christianity. It is divided into two main parts:
          the Old Testament and the New Testament. The Bible was written over approximately 1,500 years by many different authors.
        </p>
        <p className="mb-4">
          Christians believe the Bible contains God's message to humanity and provides guidance for living a good and meaningful life.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Types of Books in the Bible</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Old Testament</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Law (Torah)</strong>: The first five books, also called the Pentateuch, establish God's covenant with Israel.</li>
              <li><strong>History</strong>: Books like Joshua, Judges, and Kings tell the story of ancient Israel.</li>
              <li><strong>Poetry</strong>: Books like Psalms and Proverbs express worship, wisdom, and human emotions.</li>
              <li><strong>Prophecy</strong>: Books written by prophets who delivered God's messages to the people.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">New Testament</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Gospels</strong>: Matthew, Mark, Luke, and John tell the story of Jesus's life.</li>
              <li><strong>Acts</strong>: Chronicles the early Christian church after Jesus's resurrection.</li>
              <li><strong>Letters (Epistles)</strong>: Written by apostles like Paul to early Christian communities.</li>
              <li><strong>Revelation</strong>: A book of prophecy about the end times.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Historical Context</h2>
        <p className="mb-4">
          The Bible was written in different historical contexts across the Middle East, primarily in ancient Israel
          and the Roman Empire. The Old Testament was originally written mostly in Hebrew, while the New Testament
          was written in Greek. Today, the Bible has been translated into thousands of languages.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Key Timeline:</h3>
          <ul className="space-y-2">
            <li><strong>1500-1200 BCE</strong>: Traditional dating of Moses and the Exodus</li>
            <li><strong>1000-900 BCE</strong>: King David and Solomon's reign</li>
            <li><strong>586 BCE</strong>: Babylonian destruction of Jerusalem</li>
            <li><strong>0-30 CE</strong>: Life of Jesus</li>
            <li><strong>30-100 CE</strong>: Early church and writing of New Testament</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Why Study the Bible?</h2>
        <div className="space-y-4">
          <p>For Christians, studying the Bible helps them:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Understand God's character and plans</li>
            <li>Find guidance for daily life</li>
            <li>Learn about historical events that shaped faith</li>
            <li>Connect with a global community of believers across time</li>
          </ul>
          <p>
            Even for those who aren't religious, the Bible is an important cultural and literary text that has shaped
            history, art, literature, and law throughout the world.
          </p>
        </div>
      </section>
      
      <div className="text-center mt-8">
        <p className="mb-4">Ready to learn a method for studying the Bible?</p>
        <a href="/soap-method" className="btn-primary">Continue to SOAP Method →</a>
      </div>
    </div>
  )
}

export default Introduction 