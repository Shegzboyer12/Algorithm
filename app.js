PROCEDURE swap(VAR xp, VAR yp : INTEGER)
VAR
   tmp : INTEGER;
BEGIN
  tmp := xp;
  xp := yp;
  yp := tmp;
END

PROCEDURE analyze_sentence(sentence: STRING)
VAR
  length_of_sentence, number_of_words, number_of_vowels, i : INTEGER
  vowels: SET OF CHAR := {'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'}
BEGIN
  length_of_sentence := 0
  number_of_words := 0
  number_of_vowels := 0
  
  FOR i := 1 TO LENGTH(sentence) DO
  BEGIN
    length_of_sentence := length_of_sentence + 1
    
    IF sentence[i] IN vowels THEN
      number_of_vowels := number_of_vowels + 1
    ENDIF
    
    IF sentence[i] = ' ' THEN
      number_of_words := number_of_words + 1
    ENDIF
  END

  -- Adding one to the number of words to account for the last word.
  number_of_words := number_of_words + 1
  
  -- Printing results
  PRINT("Length of the sentence: ", length_of_sentence)
  PRINT("Number of words in the sentence: ", number_of_words)
  PRINT("Number of vowels in the sentence: ", number_of_vowels)
END

-- Example usage
VAR sentence: STRING
BEGIN
  sentence := "This is an example sentence."
  analyze_sentence(sentence)
END