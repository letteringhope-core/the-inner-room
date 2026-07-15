export const verses = [
  { text: 'Be still, and know that I am God.', ref: 'Psalm 46:10' },
  { text: 'I can do all things through Christ which strengtheneth me.', ref: 'Philippians 4:13' },
  { text: 'The Lord is my shepherd; I shall not want.', ref: 'Psalm 23:1' },
  { text: 'Trust in the Lord with all thine heart, and lean not unto thine own understanding.', ref: 'Proverbs 3:5' },
  { text: 'For God so loved the world, that he gave his only begotten Son.', ref: 'John 3:16' },
  { text: 'Cast all your anxiety on him because he cares for you.', ref: '1 Peter 5:7' },
  { text: 'The Lord is my light and my salvation; whom shall I fear?', ref: 'Psalm 27:1' },
  { text: 'This is the day which the Lord hath made; we will rejoice and be glad in it.', ref: 'Psalm 118:24' },
  { text: 'Fear thou not; for I am with thee: be not dismayed; for I am thy God.', ref: 'Isaiah 41:10' },
  { text: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.', ref: 'Matthew 11:28' },
  { text: 'Rejoice in the Lord always: and again I say, Rejoice.', ref: 'Philippians 4:4' },
  { text: 'Be strong and of a good courage; be not afraid.', ref: 'Joshua 1:9' },
  { text: 'The joy of the Lord is your strength.', ref: 'Nehemiah 8:10' },
  { text: 'In all thy ways acknowledge him, and he shall direct thy paths.', ref: 'Proverbs 3:6' },
  { text: 'Delight thyself also in the Lord; and he shall give thee the desires of thine heart.', ref: 'Psalm 37:4' },
  { text: 'Let not your heart be troubled: ye believe in God, believe also in me.', ref: 'John 14:1' },
  { text: 'And we know that all things work together for good to them that love God.', ref: 'Romans 8:28' },
  { text: 'The name of the Lord is a strong tower: the righteous runneth into it.', ref: 'Proverbs 18:10' },
  { text: 'But they that wait upon the Lord shall renew their strength.', ref: 'Isaiah 40:31' },
  { text: 'Create in me a clean heart, O God; and renew a right spirit within me.', ref: 'Psalm 51:10' },
  { text: 'Be ye kind one to another, tenderhearted, forgiving one another.', ref: 'Ephesians 4:32' },
  { text: 'Love is patient, love is kind.', ref: '1 Corinthians 13:4' },
  { text: 'Seek ye first the kingdom of God, and his righteousness.', ref: 'Matthew 6:33' },
  { text: 'The Lord will fight for you; you need only to be still.', ref: 'Exodus 14:14' },
  { text: 'God is our refuge and strength, a very present help in trouble.', ref: 'Psalm 46:1' },
  { text: 'I have set the Lord always before me: because he is at my right hand, I shall not be moved.', ref: 'Psalm 16:8' },
  { text: 'Thy word is a lamp unto my feet, and a light unto my path.', ref: 'Psalm 119:105' },
  { text: 'Give thanks in everything, for this is the will of God in Christ Jesus.', ref: '1 Thessalonians 5:18' },
  { text: 'Draw nigh to God, and he will draw nigh to you.', ref: 'James 4:8' },
  { text: 'The Lord bless thee, and keep thee.', ref: 'Numbers 6:24' }
]

export function verseOfTheDay(date = new Date()) {
  const start = new Date(date.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((date - start) / 86400000)
  return verses[dayOfYear % verses.length]
}
