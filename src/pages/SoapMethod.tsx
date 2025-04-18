import React, { useState } from 'react'

const SoapMethod: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">靈修方法 The SOAP Bible Study Method</h2>
        <p className="mb-4">
          SOAP is a simple yet effective method for studying Bible passages that aligns well with Catholic 
          tradition of lectio divina (sacred reading). The acronym stands for:
        </p>
        <div className="grid md:grid-cols-4 gap-4 my-6">
          <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">S</h3>
            <p className="font-semibold">聖經 Scripture</p>
            <p className="text-sm mt-2">Write down or read carefully the Bible verse(s)</p>
          </div>
          <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">O</h3>
            <p className="font-semibold">觀察 Observation</p>
            <p className="text-sm mt-2">What does the passage say? Note key words, people, and events</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-800 dark:text-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">A</h3>
            <p className="font-semibold">應用 Application</p>
            <p className="text-sm mt-2">How does this apply to my life as a Catholic student today?</p>
          </div>
          <div className="bg-red-100 dark:bg-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">P</h3>
            <p className="font-semibold">祈禱 Prayer</p>
            <p className="text-sm mt-2">Respond to God based on what you've learned</p>
          </div>
        </div>
        <p>
          This method helps you to not just read the Bible, but to understand it deeply, apply it to your life,
          and grow in your Catholic faith. It's a form of personal devotion that complements your participation
          in Mass and other Church practices.
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg mt-4">
          <h3 className="font-semibold mb-2">Connection to Catholic Tradition:</h3>
          <p>
            The SOAP method shares similarities with the ancient Catholic practice of <em>lectio divina</em> ("divine reading"), 
            which includes reading (lectio), meditation (meditatio), prayer (oratio), and contemplation (contemplatio).
            Both approaches encourage us to engage deeply with Scripture as a means of encountering God.
          </p>
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Example Study: Philippians 4:6-7</h2>
        
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            <button
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'overview' 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'scripture' 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('scripture')}
            >
              Scripture
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'observation' 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('observation')}
            >
              Observation
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'application' 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('application')}
            >
              Application
            </button>
            <button
              className={`py-2 px-4 border-b-2 font-medium text-sm ${
                activeTab === 'prayer' 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('prayer')}
            >
              Prayer
            </button>
          </nav>
        </div>
        
        <div className="pt-6">
          {activeTab === 'overview' && (
            <div>
              <p className="mb-4">
                Philippians is a letter written by the apostle Paul to the Christian church in Philippi.
                It was written while Paul was in prison around 60-62 CE. Despite his imprisonment,
                the letter is filled with joy and encouragement.
              </p>
              <p className="mb-4">
                This particular passage (Philippians 4:6-7) is one of the most beloved sections, 
                as it deals with anxiety and the peace that God provides.
              </p>
              <p>
                <span className="font-bold">Catholic Context:</span> This passage is often referenced in Catholic teachings 
                about prayer and trust in God. The emphasis on peace aligns with Jesus's words, "Peace I leave with you; 
                my peace I give to you" (John 14:27), which we hear echoed at every Mass.
              </p>
            </div>
          )}
          
          {activeTab === 'scripture' && (
            <div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <p className="text-xl italic">
                  "Do not be anxious about anything, but in every situation, by prayer and petition, 
                  with thanksgiving, present your requests to God. And the peace of God, which transcends 
                  all understanding, will guard your hearts and your minds in Christ Jesus."
                </p>
                <p className="mt-2 text-right">- Philippians 4:6-7 (NRSVCE)</p>
                <p className="mt-4 text-sm">
                  <span className="font-bold">Key Vocabulary:</span><br />
                  <span className="underline">anxious</span> (adj.) - worried or concerned about something<br />
                  <span className="underline">petition</span> (n.) - a formal request<br />
                  <span className="underline">transcends</span> (v.) - goes beyond the limits of<br />
                  <span className="underline">guard</span> (v.) - to protect or defend
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'observation' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Observations:</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The passage begins with a command: "Do not be anxious about anything."</li>
                <li>Instead of anxiety, we are instructed to pray.</li>
                <li>Prayer should include "thanksgiving," suggesting gratitude is important even in difficult times.</li>
                <li>The result of this practice is "peace" - not just any peace, but "the peace of God."</li>
                <li>This peace "transcends all understanding" - it's beyond human comprehension.</li>
                <li>This peace will "guard" our hearts and minds, suggesting a protective quality.</li>
                <li>This protection happens "in Christ Jesus," connecting the peace to relationship with Jesus.</li>
              </ul>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-2">
                <h4 className="font-semibold">Catholic Insight:</h4>
                <p>
                  The Catholic Church teaches that prayer is essential for our relationship with God. The Catechism states: 
                  "Prayer is the raising of one's mind and heart to God" (CCC, 2559). This passage from Philippians shows 
                  how prayer can transform our anxiety into peace.
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'application' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Application:</h3>
              <p>
                As Catholic students in Hong Kong, you face many sources of anxiety:
                difficult exams, competition for university spots, parental expectations,
                balancing studies with faith life, and social pressures.
                This passage teaches us to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recognize when we're feeling anxious about schoolwork or relationships</li>
                <li>Turn to prayer instead of being overwhelmed by worry</li>
                <li>Practice gratitude even during stressful exam periods</li>
                <li>Trust in God's peace, especially when facing difficult decisions</li>
                <li>Remember that our Catholic faith offers protection for our mental wellbeing</li>
              </ul>
              <p className="mt-4">
                <strong>Practical steps for Hong Kong students:</strong> Before your next exam or when feeling 
                stressed about school, try turning that worry into a specific prayer. You might say a traditional 
                Catholic prayer like the Hail Mary, or speak to God in your own words. Include something you're 
                thankful for, even if it's small. Notice how this practice changes your perspective.
              </p>
            </div>
          )}
          
          {activeTab === 'prayer' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Sample Prayer:</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 italic">
                <p>
                  "Heavenly Father, I recognize that I often worry about my grades, DSE exams, university applications, and family expectations. 
                  Right now, I specifically give you my anxiety about [specific worry]. 
                  Thank you for always listening to me and for the good things in my life, like my school, my family, and my parish community. 
                  I ask for your peace that goes beyond understanding. Help me to trust you more. 
                  Guard my heart and mind today. I pray this through Christ our Lord, Amen."
                </p>
              </div>
              <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-md">
                <h4 className="font-semibold">Catholic Prayer Tradition:</h4>
                <p className="mb-2">
                  You might also pray using traditional Catholic prayers or devotions. For example:
                </p>
                <ul className="list-disc pl-5">
                  <li>The Rosary - focusing on the Joyful Mysteries when seeking peace</li>
                  <li>Prayer to St. Joseph Freinademetz, a saint who served in China</li>
                  <li>A brief moment of Eucharistic adoration at your school or parish chapel</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Another Example: Sirach 6:14-17 (Friendship)</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <p className="text-xl italic">
            "Faithful friends are a sturdy shelter; whoever finds one finds a treasure. 
            Faithful friends are beyond price; no amount can balance their worth. 
            Faithful friends are life-saving medicine; those who fear the Lord will find them. 
            Those who fear the Lord direct their friendship properly, for as they are, so are their neighbors also."
          </p>
          <p className="mt-2 text-right">- Sirach 6:14-17 (NRSVCE)</p>
          <p className="text-sm mt-4">
            <em>Note: Sirach is one of the deuterocanonical books included in the Catholic Bible.</em>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">S - 聖經 Scripture</h3>
            <p>Sirach (also called Ecclesiasticus) is a wisdom book in the Catholic Bible. This passage offers wisdom about friendship.</p>
            <p className="mt-2 text-sm">
              <span className="font-bold">Key Vocabulary:</span><br />
              <span className="underline">sturdy</span> - strong, solid<br />
              <span className="underline">beyond price</span> - extremely valuable<br />
              <span className="underline">fear the Lord</span> - respect and honor God
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">O - 觀察 Observation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>True friendship is compared to a shelter, treasure, and medicine</li>
              <li>The text emphasizes that true friends are extremely valuable</li>
              <li>It connects finding good friends with having proper fear (reverence) of God</li>
              <li>There's a relationship between how we treat God and how we treat friends</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">A - 應用 Application</h3>
            <p className="mb-2">As Catholic students in Hong Kong, we can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Value true friendships over superficial social connections</li>
              <li>Recognize that good friendships support our mental and spiritual health</li>
              <li>Choose friends who respect our Catholic values and beliefs</li>
              <li>Understand that our relationship with God affects our friendships</li>
              <li>Apply traditional Chinese values of loyalty (忠誠) in our friendships</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">P - 祈禱 Prayer</h3>
            <p className="italic">
              "Lord Jesus, thank you for the gift of friendship. Help me to be a loyal and faithful friend to others in my school.
              Guide me to find friends who will support my faith journey and bring me closer to you.
              May St. Francis Xavier and the Chinese martyrs inspire me to share your friendship with others.
              Through Christ our Lord, Amen."
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-8">
        <p className="mb-4">Ready to try the SOAP method yourself?</p>
        <a href="/soap-examples" className="btn-primary">Continue to More Examples →</a>
      </div>
    </div>
  )
}

export default SoapMethod 