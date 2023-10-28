<template>
  <div class="flex flex-col items-center py-20 w-full lg:w-2/5 mx-auto px-4 lg:px-0 cupra-light">
    <p class="text-black leading-7">Jazda próbna</p>
    <p class="text-4xl text-black leading-[46px]">Umów się na bezpłatną <br> jazdę próbną</p>
    <form class="mt-10 flex items-center jutstify-center flex-col">
        <ImageDropDownComponent v-model="selectedCar"/>
      <div class="flex flex-col w-full lg:w-[503px] mx-auto">
        <div class="input-container" @click="focusInput('Imię i nazwisko')">
          <label :class="{'label-clicked': isClicked['Imię i nazwisko']}"
          >
            Imię *
          </label>
          <input
              v-model="inputValue['Imię i nazwisko']"
              class="custom-input"
          />
        </div>
        <div class="input-container" @click="focusInput('Nazwisko')">
          <label
              :class="{'label-clicked': isClicked['Nazwisko']}"
          >
            Nazwisko
          </label>
          <input
              v-model="inputValue['Nazwisko']"
              class="custom-input"
          />
        </div>
        <div class="input-container" @click="focusInput('Adres e-mail')">
          <label
              :class="{'label-clicked': isClicked['Adres e-mail']}"
          >
            Adres e-mail *
          </label>
          <input
              v-model="inputValue['Adres e-mail']"
              class="custom-input"
          />
        </div>
        <div class="input-container" @click="focusInput('Numer telefonu')">
          <label
              :class="{'label-clicked': isClicked['Numer telefonu']}"
          >
            Numer telefonu *
          </label>
          <input
              v-model="inputValue['Numer telefonu']"
              class="custom-input"
          />
        </div>
      </div>
      <div class="flex flex-col mx-auto">
        <p class="text-start text-[13px]">
          Wysłanie uzupełnionego formularza oznacza Twoją zgodę na kontakt w celu przedstawienia informacji handlowej w wybrany przez Ciebie sposób w związku <a href="#" class="underline">Czytaj więcej.</a>
        </p>
        <p class="mt-4 text-start text-sm">
          Prosimy Cię też o wyrażenie poniższych zgód w celu możliwości przedstawiania Ci atrakcyjnych ofert / promocji produktów, akcesoriów i usług marki CUPRA w przyszłości.
        </p>
      </div>
      <div class="flex flex-col">
        <div class="flex items-start justify-start my-8">
          <div>
            <input
                type="checkbox"
                v-model="first"
                class="custom-checkbox"
            />
          </div>
          <span class="text-start text-sm">
            Zgadzam się na przetwarzanie moich danych osobowych przez Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa w celu przedstawienia mi informacji marketingowych i handlowych dotyczących produktów i usług marki CUPRA oraz innych powiązanych z marką CUPRA akcesoriów, produktów i usług motoryzacyjnych za pomocą:
          </span>
        </div>
        <div class="flex items-start justify-start">
          <input
              type="checkbox"
              v-model="mailCheckbox"
              class="custom-checkbox"
          />
          <span class="text-start text-sm">E-mail</span>
        </div>
        <div class="flex items-start justify-start">
          <input
              type="checkbox"
              v-model="phoneCheckbox"
              class="custom-checkbox"
          />
          <span class="text-start text-sm">Telefon</span>
        </div>
        <div class="flex items-start justify-start">
          <input
              type="checkbox"
              v-model="smsCheckbox"
              class="custom-checkbox"
          />
          <span class="text-start text-sm">Wiadomość SMS/MMS</span>
        </div>
      </div>
      <div class="flex flex-col mx-auto">
        <p class="text-start text-[13px]">
          Masz prawo do wglądu, modyfikacji, ograniczenia przetwarzania i usunięcia swoich danych oraz do wycofania w każdym momencie swojej zgody.
        </p>
        <p class="mt-4 text-start text-sm">
          Twoje dane będą przetwarzane tylko w stopniu umożliwiającym realizację wymienionego celu.
        </p>
        <p class="mt-4 text-start text-sm">
          Administratorem Twoich danych jest Plichta spółka z ograniczoną odpowiedzialnością Spółka Komandytowa, z siedzibą w Wejherowie przy ulicy Gdańskiej 13c. Zapraszamy do zapoznania się z naszą polityką prywatności umieszczoną pod linkiem: https://www.plichta.com.pl/polityka-prywatnosci
        </p>
      </div>
      <button class="mt-4 py-3 px-6 bg-box-bgc text-white">
        <span>Umów jazdę próbną</span>
      </button>
    </form>
  </div>
</template>

<script>
import {ref} from 'vue';
import ImageDropDownComponent from "@/components/ImageDropDownComponent";

export default {
  components:{ImageDropDownComponent},
  setup() {

    const selectedCar = ref(null);
    const mailCheckbox = ref(false);
    const phoneCheckbox = ref(false);
    const smsCheckbox = ref(false);
    const isClicked = ref({
      'Imię': false,
      'Nazwisko': false,
      'Adres e-mail': false,
      'Numer telefonu': false,
    });
    const inputValue = ref({
      'Imię': "",
      'Nazwisko': "",
      'Adres e-mail': "",
      'Numer telefonu': "",
    });

    const focusInput = (fieldName) => {
      isClicked.value[fieldName] = true;
      if (inputValue.value[fieldName]) {
        inputValue.value[fieldName].focus();
      }
    };

    const blurInput = (fieldName) => {
      if (inputValue.value[fieldName] === "") {
        isClicked.value[fieldName] = false;
      }
    };

    const stopBlur = (event) => {
      event.preventDefault();
    };
    return {
      isClicked,
      inputValue,
      focusInput,
      blurInput,
      stopBlur,
      mailCheckbox,
      phoneCheckbox,
      smsCheckbox,
      selectedCar
    };
  },
}
</script>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 20px 0;
  font-size: 16px;
}

.label-clicked {
  margin-bottom: 10px;
  font-size: 12px;
  transition: all 0.5s;
}

.custom-input {
  padding: 0;
  margin-top: -10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 16px;
  background: transparent;
  outline: none;
  color: #242221;
}

.input-container .label-clicked {
  transition: all 0.5s;
}
.custom-checkbox {
  margin: 0 12px 24px 0;
  width: 20px;
  height: 20px;
  border: 1px solid #D5D5D5;
}


.custom-checkbox:checked {
  appearance: none;
  background: #8C8B8B;
  box-shadow: 0px 0px 0px 3px #F5F5F5 inset;
  -webkit-box-shadow: 0px 0px 0px 3px #F5F5F5 inset;
  -moz-box-shadow: 0px 0px 0px 3px #F5F5F5 inset;
}
</style>
