You and your friend have come up with a simple way of storing a complex encoding system in a single remembered word called 'The Alphabet Cipher'

First you'll need this key, which isn't a secret:

   ABCDEFGHIJKLMNOPQRSTUVWXYZ
 A abcdefghijklmnopqrstuvwxyz A
 B bcdefghijklmnopqrstuvwxyza B
 C cdefghijklmnopqrstuvwxyzab C
 D defghijklmnopqrstuvwxyzabc D
 E efghijklmnopqrstuvwxyzabcd E
 F fghijklmnopqrstuvwxyzabcde F
 G ghijklmnopqrstuvwxyzabcdef G
 H hijklmnopqrstuvwxyzabcdefg H
 I ijklmnopqrstuvwxyzabcdefgh I
 J jklmnopqrstuvwxyzabcdefghi J
 K klmnopqrstuvwxyzabcdefghij K
 L lmnopqrstuvwxyzabcdefghijk L
 M mnopqrstuvwxyzabcdefghijkl M
 N nopqrstuvwxyzabcdefghijklm N
 O opqrstuvwxyzabcdefghijklmn O
 P pqrstuvwxyzabcdefghijklmno P
 Q qrstuvwxyzabcdefghijklmnop Q
 R rstuvwxyzabcdefghijklmnopq R
 S stuvwxyzabcdefghijklmnopqr S
 T tuvwxyzabcdefghijklmnopqrs T
 U uvwxyzabcdefghijklmnopqrst U
 V vwxyzabcdefghijklmnopqrstu V
 W wxyzabcdefghijklmnopqrstuv W
 X xyzabcdefghijklmnopqrstuvw X
 Y yzabcdefghijklmnopqrstuvwx Y
 Z zabcdefghijklmnopqrstuvwxy Z
   ABCDEFGHIJKLMNOPQRSTUVWXYZ
then you and your friend need to agree on a secret word or 'key-word' that you don't write down but carry only in memory.

In sending a message, write the key-word over it, letter for letter, repeating it as often as may be necessary: the letters of the key-word will indicate which column is to be used in translating each letter of the message, the symbols for which should be written underneath.

For example you if want to encode: meet me on Tuesday evening at seven and your key-word was vigilance your encoding would look like:

v i g i l a n c e v i g i l a n c e v i g i l a n c e v i
m e e t m e o n t u e s d a y e v e n i n g a t s e v e n
h m k b x e b p x p m y l l y r x i i q t o l t f g z z v
your friend should be able to take the string h m k b x e b p x p m y l l y r x i i q t o l t f g z z v and decode it by writing the key-word above it as many times as necessary.

You will create a function encrypt that takes two parameters: a key-word and a string, without spaces, to encrypt. The encrypted string should be returned

so that the input: encrypt("soap", "everyonelovesadog")

will return "wjegqcntdcvtkoddy"