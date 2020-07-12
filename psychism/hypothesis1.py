from random import randrange

n_words = 2048
n_iteration = 2048

word_size_fixed = 32
word_size_patrons = [2, 4, 8, 16, 32]
word_ponderations = [ 2 ** x for x in word_size_patrons]
sum_ponderations = sum(word_ponderations)
word_size = []

stop = 0

fixed_sum = 0
variable_sum = 0

for x in range(n_iteration):
  n_bits_variable = 0

  for y in range(n_words):
    ponderation = randrange(sum_ponderations)

    for patron in word_size_patrons:
      if ponderation < 2 ** patron:
        n_bits_variable += patron + stop
        break

  variable_sum += n_bits_variable
  fixed_sum += n_words * word_size_fixed


print(variable_sum, fixed_sum, variable_sum / fixed_sum)
