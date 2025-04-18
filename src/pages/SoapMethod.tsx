import React, { useState } from 'react'

const SoapMethod: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">The SOAP Bible Study Method</h2>
        <p className="mb-4">
          SOAP is a simple yet effective method for studying Bible passages. The acronym stands for:
        </p>
        <div className="grid md:grid-cols-4 gap-4 my-6">
          <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">S</h3>
            <p className="font-semibold">Scripture</p>
            <p className="text-sm mt-2">Write down or read carefully the Bible verse(s)</p>
          </div>
          <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">O</h3>
            <p className="font-semibold">Observation</p>
            <p className="text-sm mt-2">What does the passage say? Note key words, people, and events</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-800 dark:text-gray-900 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">A</h3>
            <p className="font-semibold">Application</p>
            <p className="text-sm mt-2">How does this apply to my life today?</p>
          </div>
          <div className="bg-red-100 dark:bg-red-800 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-2">P</h3>
            <p className="font-semibold">Prayer</p>
            <p className="text-sm mt-2">Respond to God based on what you've learned</p>
          </div>
        </div>
        <p>
          This method helps you to not just read the Bible, but to understand it deeply and apply it to your life.
        </p>
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
              <p>
                This particular passage (Philippians 4:6-7) is one of the most beloved sections, 
                as it deals with anxiety and the peace that God provides.
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
                <p className="mt-2 text-right">- Philippians 4:6-7 (NIV)</p>
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
            </div>
          )}
          
          {activeTab === 'application' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Application:</h3>
              <p>
                In today's fast-paced world, students face many sources of anxiety:
                exams, social pressures, future careers, and global uncertainties.
                This passage teaches us to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recognize when we're feeling anxious</li>
                <li>Choose prayer as an alternative to worry</li>
                <li>Express gratitude even during difficult times</li>
                <li>Trust that God's peace is available to us</li>
                <li>Allow God's peace to protect our emotional and mental wellbeing</li>
              </ul>
              <p className="mt-4">
                <strong>Practical steps:</strong> Next time you feel anxious about a test, relationship, 
                or any situation, try turning that worry into a specific prayer. Include something you're 
                thankful for, even if it's small. Notice how this practice changes your perspective.
              </p>
            </div>
          )}
          
          {activeTab === 'prayer' && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Sample Prayer:</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 italic">
                <p>
                  "Dear God, I recognize that I often worry about my grades, friendships, and future. 
                  Right now, I specifically give you my concern about [specific worry]. 
                  Thank you for always listening to me and for the good things in my life, like [something to be thankful for]. 
                  I ask for your peace that goes beyond my understanding. Help me to trust you more. 
                  Guard my heart and mind today. In Jesus' name, Amen."
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="card">
        <h2 className="text-2xl font-bold mb-4">Another Example: Matthew 5:14-16</h2>
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <p className="text-xl italic">
            "You are the light of the world. A town built on a hill cannot be hidden. 
            Neither do people light a lamp and put it under a bowl. Instead they put it on its stand, 
            and it gives light to everyone in the house. In the same way, let your light shine before others, 
            that they may see your good deeds and glorify your Father in heaven."
          </p>
          <p className="mt-2 text-right">- Matthew 5:14-16 (NIV)</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">S - Scripture</h3>
            <p>Matthew 5:14-16 is part of Jesus's Sermon on the Mount. He uses metaphors of light to describe his followers.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">O - Observation</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Jesus says his followers are "the light of the world"</li>
              <li>He gives two examples: a city on a hill and a lamp on a stand</li>
              <li>Both examples emphasize visibility and purpose</li>
              <li>The goal is for others to see good deeds and give glory to God</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">A - Application</h3>
            <p className="mb-2">As students, we can:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Recognize our potential to positively influence others</li>
              <li>Look for opportunities to do good in our schools and communities</li>
              <li>Not hide our values or beliefs out of fear</li>
              <li>Remember our actions represent not just ourselves but our faith</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b pb-2 mb-4">P - Prayer</h3>
            <p className="italic">
              "God, help me to be a light in my school. Give me courage to stand for what's right and to serve others. 
              May my actions point others to you. Amen."
            </p>
          </div>
        </div>
      </section>

      <div className="text-center mt-8">
        <p className="mb-4">Ready to try the SOAP method yourself?</p>
        <a href="/interactive" className="btn-primary">Continue to Interactive Study →</a>
      </div>
    </div>
  )
}

export default SoapMethod 