import React, { useState } from 'react'

const SoapMethodExamples: React.FC = () => {
  const [activeTab, setActiveTab] = useState('example1')

  return (
    <div className="space-y-8">
      <section className="card">
        <h2 className="text-2xl font-bold mb-4">SOAP Method Examples</h2>
        <p className="mb-4">
          Now that you understand the SOAP Bible study method, let's explore additional examples 
          to deepen your understanding and see how to apply this method to different types of 
          Biblical passages.
        </p>
        <p>
          These examples show how the SOAP method can be applied to different types of Scripture, 
          including narratives, parables, and teachings from both the Old and New Testaments.
        </p>
      </section>

      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav className="flex -mb-px">
          <button
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'example1' 
                ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('example1')}
          >
            Psalm 23
          </button>
          <button
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'example2' 
                ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('example2')}
          >
            Matthew 5:1-12
          </button>
          <button
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === 'example3' 
                ? 'border-blue-500 text-blue-600 dark:text-blue-400' 
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('example3')}
          >
            John 15:1-5
          </button>
        </nav>
      </div>

      <section className="card">
        {activeTab === 'example1' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Example 1: Psalm 23</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
              <p className="text-xl italic">
                "The Lord is my shepherd, I shall not want.<br />
                He makes me lie down in green pastures;<br />
                he leads me beside still waters;<br />
                he restores my soul.<br />
                He leads me in right paths for his name's sake.<br />
                Even though I walk through the darkest valley, I fear no evil;<br />
                for you are with me; your rod and your staff—they comfort me.<br />
                You prepare a table before me in the presence of my enemies;<br />
                you anoint my head with oil; my cup overflows.<br />
                Surely goodness and mercy shall follow me all the days of my life,<br />
                and I shall dwell in the house of the Lord my whole life long."
              </p>
              <p className="mt-2 text-right">- Psalm 23 (NRSVCE)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">S - 聖經 Scripture</h3>
                <p>
                  Psalm 23 is one of the most beloved passages in the Bible. Written by King David, 
                  it portrays God as a shepherd who provides, protects, and guides his people.
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Key Vocabulary:</span><br />
                  <span className="underline">shepherd</span> - one who cares for sheep<br />
                  <span className="underline">rod and staff</span> - tools used by shepherds<br />
                  <span className="underline">anoint</span> - to apply oil, a sign of blessing<br />
                  <span className="underline">dwell</span> - to live or reside
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Catholic Connection:</span> This psalm is often read during 
                    funeral Masses and is connected to the sacraments of Baptism, Eucharist, and Anointing 
                    of the Sick. The imagery of the good shepherd is also used by Jesus to describe himself 
                    (John 10:11).
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">O - 觀察 Observation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>God is portrayed as a shepherd caring for his sheep</li>
                  <li>The psalm uses the metaphor of sheep being cared for to describe God's relationship with us</li>
                  <li>God provides for basic needs: rest, nourishment, and restoration</li>
                  <li>God guides us on the right path</li>
                  <li>God gives protection and comfort even in dangerous situations</li>
                  <li>God honors us and provides abundance</li>
                  <li>The psalm moves from speaking about God ("He") to speaking to God ("You")</li>
                  <li>It ends with a long-term promise of God's goodness and dwelling with Him</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">A - 應用 Application</h3>
                <p className="mb-2">For Catholic students in Hong Kong, this Psalm teaches us:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>God provides for our needs; we can trust Him during stressful academic periods</li>
                  <li>When we feel lost about career or life choices, God will guide us on the right path</li>
                  <li>Even during "dark valleys" (failures, disappointments, losses), God is with us</li>
                  <li>The "rod and staff" can represent the Church's teachings and sacraments that guide and protect us</li>
                  <li>God can give us peace even when surrounded by competition or difficulties ("enemies")</li>
                  <li>The anointing and overflowing cup remind us of God's generosity in the sacraments</li>
                  <li>Our ultimate goal is to dwell in God's house—to be in communion with Him now and eternally</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">P - 祈禱 Prayer</h3>
                <p className="italic">
                  "Good Shepherd, thank you for your care for me. When I'm stressed about exams or feeling lost 
                  about my future, help me remember that you guide me and provide what I truly need. In moments 
                  of darkness or failure, remind me of your presence. Thank you for the abundant graces you provide 
                  through the Church and sacraments. Like the psalmist, I want to dwell in your house all the days 
                  of my life. Through Christ our Lord, Amen."
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md mt-4">
                  <h4 className="font-semibold">Related Catholic Prayer:</h4>
                  <p className="text-sm italic mt-1">
                    "Lord Jesus, Good Shepherd, you laid down your life for your sheep. Guide me, 
                    protect me, and lead me to the Father. May I recognize your voice and follow you 
                    faithfully all the days of my life. Amen."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'example2' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Example 2: The Beatitudes (Matthew 5:1-12)</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
              <p className="text-xl italic">
                "When Jesus saw the crowds, he went up the mountain; and after he sat down, his disciples came to him. 
                Then he began to speak, and taught them, saying:<br /><br />
                
                'Blessed are the poor in spirit, for theirs is the kingdom of heaven.<br />
                Blessed are those who mourn, for they will be comforted.<br />
                Blessed are the meek, for they will inherit the earth.<br />
                Blessed are those who hunger and thirst for righteousness, for they will be filled.<br />
                Blessed are the merciful, for they will receive mercy.<br />
                Blessed are the pure in heart, for they will see God.<br />
                Blessed are the peacemakers, for they will be called children of God.<br />
                Blessed are those who are persecuted for righteousness' sake, for theirs is the kingdom of heaven.<br />
                Blessed are you when people revile you and persecute you and utter all kinds of evil against you falsely on my account. 
                Rejoice and be glad, for your reward is great in heaven, for in the same way they persecuted the prophets who were before you.'"
              </p>
              <p className="mt-2 text-right">- Matthew 5:1-12 (NRSVCE)</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">S - 聖經 Scripture</h3>
                <p>
                  The Beatitudes open Jesus' Sermon on the Mount and outline the qualities and actions that lead to true happiness or blessedness. 
                  They present a reversal of worldly values, showing that God's kingdom operates differently from earthly kingdoms.
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Key Vocabulary:</span><br />
                  <span className="underline">blessed</span> - happy in a deep, spiritual sense<br />
                  <span className="underline">poor in spirit</span> - humble, aware of spiritual need<br />
                  <span className="underline">meek</span> - gentle, humble, patient<br />
                  <span className="underline">righteousness</span> - moral rightness, justice<br />
                  <span className="underline">revile</span> - to criticize harshly
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">O - 觀察 Observation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Jesus taught these lessons after going up a mountain—reminiscent of Moses receiving the Ten Commandments</li>
                  <li>Each beatitude follows a pattern: "Blessed are [those with a certain quality]" followed by a promise</li>
                  <li>The qualities Jesus blesses are not those typically valued by society (wealth, power, happiness)</li>
                  <li>The promises include both future rewards ("will be") and present reality ("is")</li>
                  <li>The first and last beatitudes have the same promise: "theirs is the kingdom of heaven"</li>
                  <li>Jesus shifts from third person ("Blessed are those") to second person ("Blessed are you") in the final beatitude</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Catholic Teaching:</span> The Catechism states that the Beatitudes "depict the countenance of Jesus Christ 
                    and portray his charity" (CCC 1717). They are central to Jesus' teaching on moral life and stand at the heart of Catholic social teaching.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">A - 應用 Application</h3>
                <p className="mb-2">For Catholic students in Hong Kong, the Beatitudes challenge us to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recognize that God's definition of success differs from academic achievement or career advancement</li>
                  <li>Embrace humility ("poor in spirit") in a competitive educational environment</li>
                  <li>Show compassion to classmates who are struggling or mourning</li>
                  <li>Practice gentleness and patience ("meekness") when dealing with difficult people</li>
                  <li>Pursue justice and righteousness in our school and society</li>
                  <li>Extend mercy to others, even when it's not the popular choice</li>
                  <li>Maintain moral integrity ("purity of heart") despite peer pressure</li>
                  <li>Be peacemakers in conflicts among friends or family</li>
                  <li>Stand firm in our Catholic faith even when others mock or misunderstand it</li>
                </ul>
                <p className="mt-4">
                  <strong>Practical Application:</strong> Choose one beatitude to focus on this week. For example, if you select "Blessed are the peacemakers," 
                  look for opportunities to mediate conflicts or bring harmony to tense situations at school.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">P - 祈禱 Prayer</h3>
                <p className="italic">
                  "Lord Jesus, you taught us the true path to happiness through the Beatitudes. Help me to embrace these values, even when they seem 
                  counter-cultural. Give me the courage to be poor in spirit, meek, merciful, and a peacemaker. When I face mockery or criticism for 
                  my faith, remind me that you promised a great reward in heaven. May the Beatitudes shape my character and guide my choices as a 
                  Catholic student. Through Christ our Lord, Amen."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'example3' && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Example 3: The Vine and the Branches (John 15:1-5)</h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 mb-6">
              <p className="text-xl italic">
                "'I am the true vine, and my Father is the vinegrower. He removes every branch in me that bears no fruit. 
                Every branch that bears fruit he prunes to make it bear more fruit. You have already been cleansed by the 
                word that I have spoken to you. Abide in me as I abide in you. Just as the branch cannot bear fruit by itself 
                unless it abides in the vine, neither can you unless you abide in me. I am the vine, you are the branches. 
                Those who abide in me and I in them bear much fruit, because apart from me you can do nothing.'"
              </p>
              <p className="mt-2 text-right">- John 15:1-5 (NRSVCE)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">S - 聖經 Scripture</h3>
                <p>
                  In this passage, Jesus uses an agricultural metaphor to describe the relationship between himself, 
                  his disciples, and God the Father. He compares himself to a vine, his followers to branches, and 
                  God the Father to a vinegrower.
                </p>
                <p className="mt-2 text-sm">
                  <span className="font-bold">Key Vocabulary:</span><br />
                  <span className="underline">vine</span> - a plant that produces grapes<br />
                  <span className="underline">vinegrower</span> - one who tends grape vines<br />
                  <span className="underline">prunes</span> - cuts back to promote growth<br />
                  <span className="underline">abide</span> - to remain, stay connected<br />
                  <span className="underline">bear fruit</span> - to produce results, be productive
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">O - 觀察 Observation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Jesus identifies himself as "the true vine"—implying there are false vines</li>
                  <li>God the Father is portrayed as an active gardener who tends the vine</li>
                  <li>There are two types of branches: those that bear fruit and those that don't</li>
                  <li>Non-fruit-bearing branches are removed</li>
                  <li>Even fruit-bearing branches are pruned to increase their productivity</li>
                  <li>Jesus emphasizes the necessity of "abiding" or remaining connected to him</li>
                  <li>The key message: without connection to Jesus, we cannot bear spiritual fruit</li>
                </ul>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md mt-4">
                  <p className="text-sm">
                    <span className="font-bold">Catholic Connection:</span> This passage has deep Eucharistic meaning. Jesus' statement 
                    "Abide in me as I abide in you" connects to John 6:56: "Those who eat my flesh and drink my blood abide in me, and I in them." 
                    The Eucharist is how we most literally "abide" in Christ.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">A - 應用 Application</h3>
                <p className="mb-2">As Catholic students in Hong Kong, we can apply this passage by:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recognizing our need to stay connected to Christ to succeed spiritually</li>
                  <li>Understanding that academic achievements without spiritual growth are incomplete</li>
                  <li>Accepting that God sometimes "prunes" our lives (through challenges or suffering) to help us grow</li>
                  <li>Making time for prayer, Mass, and sacraments to "abide" in Christ, even during busy exam periods</li>
                  <li>Seeing our "fruit" as more than just achievements—including virtue, good works, and positive influence</li>
                  <li>Remembering that apart from Christ, our efforts ultimately "can do nothing" of eternal value</li>
                </ul>
                <p className="mt-4">
                  <strong>Practical Step:</strong> Set a specific way to "abide in Christ" daily. This could be morning prayer, 
                  reading a Bible verse, or attending weekday Mass. Record how this connection affects your peace, purpose, and "fruit."
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold border-b pb-2 mb-4">P - 祈禱 Prayer</h3>
                <p className="italic">
                  "Lord Jesus, you are the true vine, and I am merely a branch. Thank you for the privilege of being connected to you. 
                  Help me to abide in you through prayer, Scripture, and the sacraments—especially the Eucharist. When I face pruning 
                  through challenges or disappointments, help me to trust the Father's wisdom. May my life bear abundant fruit that 
                  glorifies you. I acknowledge that apart from you, I can do nothing of lasting value. Through Christ our Lord, Amen."
                </p>
                <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md mt-4">
                  <h4 className="font-semibold">Eucharistic Prayer:</h4>
                  <p className="text-sm italic mt-1">
                    "Jesus, present in the Blessed Sacrament, you invite me to abide in you. Through this sacred communion, 
                    may I remain connected to you as a branch to the vine. Transform me by your presence, that I may bear fruit 
                    in my studies, relationships, and service to others. Amen."
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <h2 className="text-xl font-bold mb-4">Tips for Effective SOAP Study</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Best Practices:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Start with prayer, asking the Holy Spirit to guide your understanding</li>
              <li>Choose a consistent time and place for your Bible study</li>
              <li>Consider using a journal to record your SOAP reflections</li>
              <li>Begin with shorter passages (5-10 verses) as you get started</li>
              <li>Use a Catholic Bible translation like the NRSVCE or Jerusalem Bible</li>
              <li>Connect your study to the liturgical calendar when possible</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Catholic Resources to Enhance Your Study:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>The Catechism of the Catholic Church</li>
              <li>Catholic Bible commentaries</li>
              <li>Writings of the Church Fathers</li>
              <li>Papal encyclicals on Scripture (like Verbum Domini)</li>
              <li>Catholic Bible study guides</li>
              <li>Ask your parish priest or school chaplain for guidance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="/soap-method" className="btn-secondary">← Back to SOAP Method</a>
          <a href="/interactive" className="btn-primary">Continue to Interactive Study →</a>
        </div>
      </div>
    </div>
  )
}

export default SoapMethodExamples 