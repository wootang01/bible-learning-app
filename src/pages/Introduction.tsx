import React from 'react'

const Introduction: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">歡迎 Welcome to Catholic Bible Learning</h2>
        <p className="mb-4">
          This resource is designed to help Hong Kong Catholic secondary school students explore and understand the Bible.
          Whether you're new to reading the Bible or have some experience already, we hope this guide will help
          deepen your understanding, enrich your English language skills, and strengthen your Catholic faith.
        </p>
        <p className="italic text-gray-600 dark:text-gray-400">
          "The Church has always venerated the divine Scriptures just as she venerates the body of the Lord." 
          (Catechism of the Catholic Church, 103)
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">聖經是什麼？What is the Bible?</h2>
        <p className="mb-4">
          The Bible (聖經) is a collection of sacred texts that is central to the Catholic faith. In the Catholic tradition, 
          the Bible consists of 73 books—46 in the Old Testament (including 7 Deuterocanonical books) and 27 in the 
          New Testament. The Bible was written over approximately 1,500 years by many different authors under divine inspiration.
        </p>
        <p className="mb-4">
          Catholics believe the Bible contains God's revelation to humanity, which, alongside Sacred Tradition and the 
          teaching authority of the Church (Magisterium), provides guidance for living a good and faithful life.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">聖經中的書籍 Types of Books in the Catholic Bible</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">舊約 Old Testament</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>摩西五書 Pentateuch</strong>: The first five books establish God's covenant with His people.</li>
              <li><strong>歷史書 Historical Books</strong>: Including Joshua, Judges, Kings, and the Deuterocanonical books like Tobit and Maccabees.</li>
              <li><strong>智慧書 Wisdom Literature</strong>: Including Psalms, Proverbs, Wisdom, and Sirach.</li>
              <li><strong>先知書 Prophetic Books</strong>: Major and minor prophets who delivered God's messages.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">新約 New Testament</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>福音書 Gospels</strong>: Matthew, Mark, Luke, and John tell the story of Jesus's life.</li>
              <li><strong>宗徒大事錄 Acts of the Apostles</strong>: Chronicles the early Catholic Church after Jesus's resurrection.</li>
              <li><strong>書信 Epistles</strong>: Letters written by apostles like Paul to early Christian communities.</li>
              <li><strong>默示錄 Revelation</strong>: A book of prophecy about the end times.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">聖經及中國 The Bible and China</h2>
        <p className="mb-4">
          The Catholic Church has a long history in China, dating back to the 7th century. Catholic missionaries like 
          Matteo Ricci (利瑪竇) in the 16th century made significant contributions to cultural exchange between China 
          and the West, translating Christian texts and introducing Western science and arts to China.
        </p>
        <p className="mb-4">
          Many Chinese Catholics have found connections between Catholic teachings and traditional Chinese values:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Reverence for family (孝道) connects with the Bible's emphasis on honoring parents</li>
          <li>Respect for learning (尊師重道) parallels the Bible's wisdom literature</li>
          <li>Emphasis on moral virtue (德行) resonates with biblical ethics</li>
        </ul>
        <p>
          Today, there are over 10 million Catholics in China, with a rich heritage of faith and Chinese cultural tradition.
        </p>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">聖經時間線 Historical Context</h2>
        <p className="mb-4">
          The Bible was written across different historical contexts, primarily in the Middle East.
          The Old Testament was originally written mostly in Hebrew, while the New Testament
          was written in Greek.
        </p>
        <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-2">Key Timeline:</h3>
          <ul className="space-y-2">
            <li><strong>1500-1200 BCE</strong>: Traditional dating of Moses and the Exodus</li>
            <li><strong>1000-900 BCE</strong>: King David and Solomon's reign</li>
            <li><strong>586 BCE</strong>: Babylonian destruction of Jerusalem</li>
            <li><strong>0-33 CE</strong>: Life of Jesus Christ</li>
            <li><strong>33-100 CE</strong>: Early Church and writing of New Testament</li>
            <li><strong>382 CE</strong>: Pope Damasus I commissioned the Latin Vulgate Bible</li>
            <li><strong>635 CE</strong>: Christianity first introduced to China (Tang Dynasty)</li>
            <li><strong>1294 CE</strong>: First Catholic mission to China (Yuan Dynasty)</li>
            <li><strong>1582 CE</strong>: Jesuit missionary Matteo Ricci arrives in China</li>
            <li><strong>1968 CE</strong>: 120 Chinese martyrs canonized by Pope Paul VI</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">為何研讀聖經？Why Study the Bible?</h2>
        <div className="space-y-4">
          <p>For Catholic students in Hong Kong, studying the Bible helps you:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Deepen your relationship with God and understanding of the faith</li>
            <li>Connect with the Church's two-thousand-year tradition</li>
            <li>Prepare for Mass readings and liturgical celebrations</li>
            <li>Find wisdom for navigating academic pressure and social challenges</li>
            <li>Improve your English skills through engaging with sacred texts</li>
            <li>Bridge your Catholic faith with Chinese cultural heritage</li>
          </ul>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md mt-4">
            <h4 className="font-semibold mb-2">English Learning Note:</h4>
            <p>
              As you read the Bible in English, you'll encounter many important vocabulary words and expressions 
              that will help you in your English studies. Key terms will be highlighted throughout this app to 
              support your language learning.
            </p>
          </div>
        </div>
      </section>
      
      <div className="text-center mt-8">
        <p className="mb-4">Ready to learn a Catholic method for studying the Bible?</p>
        <a href="/soap-method" className="btn-primary">Continue to SOAP Method →</a>
      </div>
    </div>
  )
}

export default Introduction 