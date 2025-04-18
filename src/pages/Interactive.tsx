import React, { useState } from 'react'

const Interactive: React.FC = () => {
  const [selectedPassage, setSelectedPassage] = useState('john3')
  const [soapNotes, setSoapNotes] = useState({
    scripture: '',
    observation: '',
    application: '',
    prayer: ''
  })
  const [aiHelp, setAiHelp] = useState({
    observation: '',
    application: '',
    prayer: ''
  })
  const [showScaffold, setShowScaffold] = useState(false)

  const passages = {
    john3: {
      title: 'John 3:16-17',
      text: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. For God did not send his Son into the world to condemn the world, but to save the world through him.',
      translation: 'NRSVCE (New Revised Standard Version Catholic Edition)',
      chineseTitle: '若望福音 3:16-17',
      vocabulary: [
        { word: 'perish', definition: 'to die or be destroyed' },
        { word: 'condemn', definition: 'to express complete disapproval of; to sentence to punishment' },
        { word: 'eternal', definition: 'lasting or existing forever; without end' }
      ],
      scaffolds: {
        observation: [
          'Who are the main characters or people mentioned?',
          'What actions are described?',
          'What words are repeated or emphasized?',
          'What contrasts do you see? (e.g., perish vs. eternal life)',
          'How does this passage reflect Catholic teaching about salvation?'
        ],
        application: [
          'How does this change how I think about God\'s love?',
          'How does this connect to what I learn at Mass or in my catechism class?',
          'Is there a promise I can hold onto during difficult times at school?',
          'How might this affect my relationships with classmates or teachers?',
          'How can I apply this message as a Chinese Catholic student?'
        ],
        prayer: [
          'Thank God for what this passage reveals about His love',
          'Pray for your school community in light of this passage',
          'Ask for help to share God\'s love with others in Hong Kong',
          'Consider adding a traditional Catholic prayer like the Glory Be'
        ]
      }
    },
    tobit: {
      title: 'Tobit 4:5-11',
      text: 'Remember the Lord all your days, my son, and refuse to sin or to transgress his commandments. Live uprightly all the days of your life, and do not walk in the ways of wrongdoing... Do not turn your face away from anyone who is poor, and the face of God will not be turned away from you. If you have many possessions, make your gift from them in proportion; if few, do not be afraid to give according to the little you have. So you will be laying up a good treasure for yourself against the day of necessity.',
      translation: 'NRSVCE (New Revised Standard Version Catholic Edition)',
      chineseTitle: '多俾亞傳 4:5-11',
      vocabulary: [
        { word: 'transgress', definition: 'to go beyond a boundary or limit; to violate a law' },
        { word: 'uprightly', definition: 'in an honest and moral way' },
        { word: 'proportion', definition: 'a part, share, or amount in relation to the whole' }
      ],
      scaffolds: {
        observation: [
          'What advice is being given in this passage?',
          'Who is speaking to whom?',
          'What virtues are being encouraged?',
          'What warnings are provided?',
          'Note that Tobit is a deuterocanonical book included in the Catholic Bible'
        ],
        application: [
          'How does this guidance apply to my life as a Hong Kong student?',
          'Which parts of this advice connect with traditional Chinese values?',
          'How can I show generosity even with limited resources?',
          'How might this passage guide my decisions about helping others?',
          'How does this connect to Catholic Social Teaching?'
        ],
        prayer: [
          'Ask for wisdom to follow these teachings',
          'Pray for the poor in Hong Kong',
          'Thank God for the gifts and blessings you have received',
          'Ask for guidance in balancing study and charity work'
        ]
      }
    }
  }

  const simulateAIHelp = (section: string) => {
    // In a real app, this would call an actual AI API
    // For now, we'll just simulate AI responses
    
    if (selectedPassage === 'john3') {
      if (section === 'observation') {
        setAiHelp(prev => ({
          ...prev,
          observation: "I notice this passage reveals God's profound love through the gift of his Son. The Catholic Church teaches this as the central mystery of our faith. There's a significant contrast between perishing and eternal life. It also clarifies God's purpose wasn't to condemn but to save through Jesus, which connects to our understanding of God's mercy."
        }))
      } else if (section === 'application') {
        setAiHelp(prev => ({
          ...prev,
          application: "As a Catholic student in Hong Kong, this passage reminds you that God's love extends to everyone, which could inspire how you treat classmates from different backgrounds. When facing academic pressure, remember God sent Jesus to save, not condemn - this might help with feelings of inadequacy. How does this message of God's love provide comfort during stressful exam periods or family expectations?"
        }))
      } else if (section === 'prayer') {
        setAiHelp(prev => ({
          ...prev,
          prayer: "You might pray: 'Heavenly Father, thank you for the gift of your Son and your amazing love for me. Help me to truly believe in Jesus and experience the eternal life you promise. When I face pressure at school, remind me that you seek to save, not condemn me. Help me share your love with my classmates. Through Christ our Lord, Amen. Glory be to the Father, and to the Son, and to the Holy Spirit...'"
        }))
      }
    } else if (selectedPassage === 'tobit') {
      if (section === 'observation') {
        setAiHelp(prev => ({
          ...prev,
          observation: "This passage from the Catholic deuterocanonical book of Tobit contains a father's advice to his son. It emphasizes several virtues: remembering God, avoiding sin, living uprightly, and being generous to the poor. The text creates a connection between how we treat the poor and how God treats us. It also acknowledges that people have different levels of resources but encourages generosity regardless."
        }))
      } else if (section === 'application') {
        setAiHelp(prev => ({
          ...prev,
          application: "As a Catholic student in Hong Kong, this passage encourages balancing academic achievement with moral development. The advice to remember God relates to maintaining your faith amid a busy student life. The emphasis on helping the poor, even with limited resources, could inspire volunteer work or simple acts of kindness toward classmates in need. This aligns with both Catholic Social Teaching and traditional Chinese values of 仁 (benevolence) and 義 (righteousness)."
        }))
      } else if (section === 'prayer') {
        setAiHelp(prev => ({
          ...prev,
          prayer: "Consider praying: 'Lord God, help me to remember you in all my daily activities, especially at school. Give me the wisdom to follow your commandments even when faced with temptations or peer pressure. Open my eyes to see those in need around me, and give me a generous heart. Help me to balance my studies with acts of charity. I ask this through Christ our Lord, Amen. Our Father, who art in heaven...'"
        }))
      }
    }
  }

  const handleChangePassage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPassage(e.target.value)
    setSoapNotes({
      scripture: '',
      observation: '',
      application: '',
      prayer: ''
    })
    setAiHelp({
      observation: '',
      application: '',
      prayer: ''
    })
  }

  const handleInputChange = (section: string, value: string) => {
    setSoapNotes(prev => ({
      ...prev,
      [section]: value
    }))
  }

  const currentPassage = passages[selectedPassage as keyof typeof passages]

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">互動靈修學習 Interactive SOAP Bible Study</h2>
        <p className="mb-6">
          Now it's your turn to try the SOAP method with Catholic scripture passages. Select a passage below and work through each step.
          Use the scaffolding questions if you need help, and click the "AI Suggestion" button if you want some ideas.
        </p>
        
        <div className="mb-6">
          <label htmlFor="passage-select" className="block text-sm font-medium mb-2">
            Choose a passage (選擇經文):
          </label>
          <select
            id="passage-select"
            value={selectedPassage}
            onChange={handleChangePassage}
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600"
          >
            <option value="john3">John 3:16-17 (若望福音)</option>
            <option value="tobit">Tobit 4:5-11 (多俾亞傳) - Catholic Deuterocanonical Book</option>
          </select>
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="font-bold text-lg mb-2">{currentPassage.chineseTitle} ({currentPassage.title})</h3>
          <p className="text-xl italic">{currentPassage.text}</p>
          <p className="mt-2 text-right text-sm">{currentPassage.translation}</p>
          
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2">Key Vocabulary for English Learners:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {currentPassage.vocabulary.map((item, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium underline">{item.word}</span>: {item.definition}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
          <button 
            className="mx-4 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setShowScaffold(!showScaffold)}
          >
            {showScaffold ? "Hide Scaffolding" : "Show Scaffolding Questions"}
          </button>
          <div className="flex-grow h-px bg-gray-200 dark:bg-gray-700"></div>
        </div>
        
        <div className="space-y-8">
          {/* Scripture Section - Just the passage reference */}
          <div className="border border-blue-200 dark:border-blue-900 rounded-lg p-6 bg-blue-50 dark:bg-blue-900/20">
            <h3 className="text-xl font-bold mb-4 text-blue-800 dark:text-blue-400">S - 聖經 Scripture</h3>
            <p className="mb-4">
              The scripture passage is {currentPassage.title} ({currentPassage.chineseTitle}). You can refer to it above.
            </p>
          </div>
          
          {/* Observation Section */}
          <div className="border border-green-200 dark:border-green-900 rounded-lg p-6 bg-green-50 dark:bg-green-900/20">
            <h3 className="text-xl font-bold mb-4 text-green-800 dark:text-green-400">O - 觀察 Observation</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.observation.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.observation}
              onChange={(e) => handleInputChange('observation', e.target.value)}
              placeholder="What do you observe in this passage? What stands out to you from a Catholic perspective?"
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.observation && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.observation}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('observation')}
              className="mt-4 px-4 py-2 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 rounded-md hover:bg-green-200 dark:hover:bg-green-700"
            >
              Get AI Help with Observation
            </button>
          </div>
          
          {/* Application Section */}
          <div className="border border-yellow-200 dark:border-yellow-900 rounded-lg p-6 bg-yellow-50 dark:bg-yellow-900/20">
            <h3 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-400">A - 應用 Application</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.application.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.application}
              onChange={(e) => handleInputChange('application', e.target.value)}
              placeholder="How can you apply this passage to your life as a Catholic student in Hong Kong?"
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.application && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.application}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('application')}
              className="mt-4 px-4 py-2 bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 rounded-md hover:bg-yellow-200 dark:hover:bg-yellow-700"
            >
              Get AI Help with Application
            </button>
          </div>
          
          {/* Prayer Section */}
          <div className="border border-red-200 dark:border-red-900 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
            <h3 className="text-xl font-bold mb-4 text-red-800 dark:text-red-400">P - 祈禱 Prayer</h3>
            
            {showScaffold && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-md">
                <h4 className="font-semibold mb-2">Scaffolding Questions:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {currentPassage.scaffolds.prayer.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <textarea
              value={soapNotes.prayer}
              onChange={(e) => handleInputChange('prayer', e.target.value)}
              placeholder="Write a prayer based on this passage. You can include traditional Catholic prayers if you wish."
              className="w-full p-3 border border-gray-300 rounded-md min-h-32 dark:bg-gray-700 dark:border-gray-600"
            />
            
            {aiHelp.prayer && (
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                <h4 className="font-semibold mb-2">AI Suggestion:</h4>
                <p>{aiHelp.prayer}</p>
              </div>
            )}
            
            <button
              onClick={() => simulateAIHelp('prayer')}
              className="mt-4 px-4 py-2 bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-100 rounded-md hover:bg-red-200 dark:hover:bg-red-700"
            >
              Get AI Help with Prayer
            </button>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <h3 className="font-bold mb-2">Reflection:</h3>
          <p className="mb-2">
            After completing your SOAP study, take a moment to reflect on the process. 
            How does this practice deepen both your Catholic faith and English language skills?
          </p>
          <p>
            Consider sharing your reflections with classmates or bringing them to your next 
            religious education class or parish youth group.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Interactive 