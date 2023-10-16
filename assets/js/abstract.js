/* --------------------------------- Render --------------------------------- */
let mainAbstract = document.querySelector("#main-abstract");

function renderCode() {
  mainAbstract.innerHTML += `
  <div class="abstract-container">
  <form  id="abstract-form">
    <h3 class="abstract-title">Məlumatlarınızı qeyd edin</h3>
    <div class="info-area">
      <div class="form-group">
        <label for="name"> Abstraktın əsas adı*</label>
        <input type="text" name="name" id="name" autocomplete="on" />
        <div id="name-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <div class="select-label">Abstraktın kateqoriyası*</div>
        <div class="select">
          <span
            onclick="openSelect(event, 'category')"
            class="select-title"
            ><span class="text" id="select-first-text">Seç</span>
            <div class="icon">
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3785 1.62158L9.37031 7.62973C8.92701 8.07303 8.20828 8.07303 7.76499 7.62973L1.75684 1.62158"
                  stroke="#414141"
                  stroke-width="1.7027"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
          <ul class="select-list" id="category">
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">-tibb işçilər</li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <div class="select-label">Abstrakt əsas mövzusu</div>
        <div class="select">
          <span
            onclick="openSelect(event, 'mainTheme')"
            class="select-title"
            ><span class="text" id="select-second-text">Seç</span>
            <div class="icon">
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3785 1.62158L9.37031 7.62973C8.92701 8.07303 8.20828 8.07303 7.76499 7.62973L1.75684 1.62158"
                  stroke="#414141"
                  stroke-width="1.7027"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
          <ul class="select-list" id="mainTheme">
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group">
        <div class="select-label">Abstraktın altmövzusu</div>
        <div class="select">
          <span
            onclick="openSelect(event, 'subtopic')"
            class="select-title"
            ><span class="text" id="select-third-text">Seç</span>
            <div class="icon">
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3785 1.62158L9.37031 7.62973C8.92701 8.07303 8.20828 8.07303 7.76499 7.62973L1.75684 1.62158"
                  stroke="#414141"
                  stroke-width="1.7027"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
          <ul class="select-list" id="subtopic">
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb</li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <div class="select-label">Abstraktın növü</div>

        <div class="select">
          <span
            onclick="openSelect(event, 'typeAbstract')"
            class="select-title"
            ><span class="text" id="select-fourth-text">Seç</span>
            <div class="icon">
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3785 1.62158L9.37031 7.62973C8.92701 8.07303 8.20828 8.07303 7.76499 7.62973L1.75684 1.62158"
                  stroke="#414141"
                  stroke-width="1.7027"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
          <ul class="select-list" id="typeAbstract">
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb işçilər</li>
            <li class="select-item">Qeyri-tibb</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group checkbox-area">
        <label for="checkbox-live"> İştirak növü</label>
        <div class="inp-area">
          <span class="check-title">Canlı iştirak</span>
          <input type="checkbox" name="checkbox" id="checkbox-live" />
        </div>
      </div>
      <div class="form-group checkbox-area">
        <label for="checkbox-virtual"> İştirak növü</label>
        <div class="inp-area">
          <span class="check-title">Virtual iştirak</span>
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox-virtual"
          />
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group">
        <label for="coment"> Şərh üçün*</label>
        <input
          type="text"
          name="coment"
          id="coment"
          autocomplete="on"
        />
        <div id="coment-error" class="error-message"></div>
      </div>
    </div>
    <h3 class="abstract-title">Məlumatlarınızı qeyd edin</h3>
    <div class="info-area">
      <div class="form-group">
        <div class="select-label">Təqdimi mən edəcəm*</div>
        <div class="select">
          <span
            onclick="openSelect(event, 'production')"
            class="select-title"
            ><span class="text" id="select-personal-text">Seç</span>
            <div class="icon">
              <svg
                width="17"
                height="9"
                viewBox="0 0 17 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3785 1.62158L9.37031 7.62973C8.92701 8.07303 8.20828 8.07303 7.76499 7.62973L1.75684 1.62158"
                  stroke="#414141"
                  stroke-width="1.7027"
                  stroke-linecap="round"
                />
              </svg>
            </div>
          </span>
          <ul class="select-list" id="production">
            <li class="select-item">Mən</li>
            <li class="select-item">Başqası</li>
          </ul>
        </div>
      </div>
      <div class="form-group">
        <label for="personal-name"> Müəllifin tam adı*</label>
        <input
          type="text"
          name="name"
          id="main-personal-name"
          autocomplete="on"
        />
        <div id="main-personal-name-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="personal-name"> Ad*</label>
        <input
          type="text"
          name="name"
          id="personal-name"
          autocomplete="on"
        />
        <div id="personal-name-error" class="error-message"></div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group">
        <label for="personal-surname"> Soyad adı*</label>
        <input type="text" name="surname" id="personal-surname" />
        <div id="personal-surname-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="father-name">Ata Adı*</label>
        <input type="text" name="father-name" id="father-name" />
        <div id="father-name-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="country"> Ölkə*</label>
        <input
          type="text"
          name="country"
          id="country"
          autocomplete="on"
        />
        <div id="country-error" class="error-message"></div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group">
        <label for="town"> Şəhər*</label>
        <input type="text" name="town" id="town" />
        <div id="town-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="email"> E-Poçt ünvanı*</label>
        <input type="email" name="email" id="email" autocomplete="on" />
        <div id="email-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="company-name"> Təmsil etdiyiniz müəssisə*</label>
        <input type="text" name="company-name" id="company-name" />
        <div id="company-name-error" class="error-message"></div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group text-area">
        <label for="summary"> Xülasə</label>
        <textarea
          name="summary"
          id="summary"
          maxlength="100"
          rows="5"
        ></textarea>
        <span class="size"
          ><span class="resize"></span>|
          <span class="max-size">100</span>
        </span>
      </div>
      <div class="form-group text-area">
        <label for="methods"> Metodlar</label>
        <textarea
          name="methods"
          id="methods"
          maxlength="200"
          rows="5"
        ></textarea>
        <span class="size"
          ><span class="resize"></span>|<span class="max-size"
            >200</span
          ></span
        >
      </div>
    </div>
    <div class="info-area">
      <div class="form-group text-area">
        <label for="results"> Nəticələr</label>
        <textarea
          name="results"
          id="results"
          maxlength="300"
          rows="5"
        ></textarea>
        <span class="size"
          ><span class="resize"></span>|<span class="max-size"
            >300</span
          ></span
        >
      </div>
      <div class="form-group text-area">
        <label for="discussion"> Müzakirə</label>
        <textarea
          name="discussion"
          id="discussion"
          maxlength="300"
          rows="5"
        ></textarea>
        <span class="size"
          ><span class="resize"></span>|<span class="max-size"
            >300</span
          ></span
        >
      </div>
    </div>
    <div class="info-area">
      <div class="form-group-img">
        <label for="file-input-1"> Şəkil/Diagram#1*</label>

        <label class="file-label" for="file-input-1">Faylı seçin</label>
        <input type="file" id="file-input-1" name="file-input" />
        <label id="file-input-label" class="inp-text" for="file-input-1"
          >Seçili fayl yoxdur</label
        >
      </div>
      <div class="form-group-img">
        <label for="file-input-2"> Diagram#1*</label>

        <label class="file-label" for="file-input-2"
          >Word faylını seçin</label
        >
        <input type="file" id="file-input-2" name="file-input" />
        <label id="file-input-label" class="inp-text" for="file-input-2"
          >Seçili fayl yoxdur
        </label>
      </div>
      <div class="form-group-img">
        <label for="file-input-3"> Şəkil/Diagram#1*</label>

        <label class="file-label" for="file-input-3">Faylı seçin</label>
        <input type="file" id="file-input-3" name="file-input" />
        <label id="file-input-label" class="inp-text" for="file-input-3"
          >Seçili fayl yoxdur</label
        >
      </div>
    </div>
    <div class="info-area">
      <div class="form-group">
        <label for="key-word-first"> Açar söz (max. 2 söz)</label>
        <input type="text" name="key-word-first" id="key-word-first" />
        <div id="key-word-first-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="key-word-second"> Açar söz (max. 2 söz)</label>
        <input type="text" name="key-word-first" id="key-word-second" />
        <div id="key-word-second-error" class="error-message"></div>
      </div>
      <div class="form-group">
        <label for="key-word-third"> Açar söz (max. 2 söz)</label>
        <input type="text" name="key-word-third" id="key-word-third" />
        <div id="key-word-third-error" class="error-message"></div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group checkbox-area specific-style-first">
        <div class="inp-area">
          <label for="first-text" class="check-title"
            >Tədqiqata görə qonorar almışam
          </label>
          <input type="checkbox" id="first-text" />
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group checkbox-area specific-style-second">
        <div class="inp-area">
          <label for="second-text" class="check-title"
            >Tədqiqata görə qrant və ya maliyyə mükafatı almışam
          </label>
          <input type="checkbox" id="second-text" />
        </div>
      </div>
    </div>
    <div class="info-area">
      <div class="form-group checkbox-area specific-style-third">
        <div class="inp-area">
          <label for="third-text" class="check-title"
            >Tibbi cihaz və ya dərman şirkətlərinin səhmlərinə malikəm
          </label>
          <input type="checkbox" id="third-text" />
        </div>
      </div>
    </div>
    <div class="btn-area">
      <button class="btn" type="submit" id="btnSend">Göndər</button>
      <button class="btn" type="submit" id="btnSave">
        Qaralama olaraq saxla
      </button>
      <span class="btn" id="history-abstract-btn"
        >Qaralama siyahısı</span
      >
      <span class="btn">Önizləmə</span>
    </div>
  </form>
  <div class="abstract-history">
    <div class="abstract-history-container">
      <table class="history-table">
        <caption class="history-title">
          Qaralama siyahısı
        </caption>
        <thead class="table-head">
          <tr>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">E-poçt</th>
            <th scope="col">Firstname Init</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr>
            <td scope="row" data-label="Firstname">Sadiq</td>
            <td data-label="Lastname">Abdullayev</td>
            <td data-label="E-poçt " class="email">
              sadiq.abdullayev1903@..
            </td>
            <td data-label="Firstname Init">Men</td>
            <td data-label="Edit">
              <div class="edit-area">
                <div class="edit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8066 5.65942L18.4661 9.31888L7.48773 20.2972L3.82828 20.2972L3.82828 16.6378L14.8066 5.65942Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M18.4668 2L22.1263 5.65945L19.1987 8.58702L17.369 6.75729L15.5392 4.92756L18.4668 2Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
                <div class="delete-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.1875"
                      y="8.33337"
                      width="11.875"
                      height="12.6667"
                      rx="1"
                      fill="#5C545E"
                    />
                    <path
                      d="M5.10011 4.39455C5.04933 4.19442 5.20058 4 5.40705 4H18.8429C19.0494 4 19.2007 4.19442 19.1499 4.39455L18.5189 6.88122C18.4833 7.02166 18.3569 7.12 18.212 7.12H6.03802C5.89313 7.12 5.76671 7.02166 5.73108 6.88122L5.10011 4.39455Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M10.541 2.31667C10.541 2.14178 10.6828 2 10.8577 2H13.391C13.5659 2 13.7077 2.14178 13.7077 2.31667V3.58333H10.541V2.31667Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Firstname">Sadiq</td>
            <td data-label="Lastname">Abdullayev</td>
            <td data-label="E-poçt">sadiq.abdullayev1903@..</td>
            <td data-label="Firstname Init">Men</td>
            <td data-label="Edit">
              <div class="edit-area">
                <div class="edit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8066 5.65942L18.4661 9.31888L7.48773 20.2972L3.82828 20.2972L3.82828 16.6378L14.8066 5.65942Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M18.4668 2L22.1263 5.65945L19.1987 8.58702L17.369 6.75729L15.5392 4.92756L18.4668 2Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
                <div class="delete-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.1875"
                      y="8.33337"
                      width="11.875"
                      height="12.6667"
                      rx="1"
                      fill="#5C545E"
                    />
                    <path
                      d="M5.10011 4.39455C5.04933 4.19442 5.20058 4 5.40705 4H18.8429C19.0494 4 19.2007 4.19442 19.1499 4.39455L18.5189 6.88122C18.4833 7.02166 18.3569 7.12 18.212 7.12H6.03802C5.89313 7.12 5.76671 7.02166 5.73108 6.88122L5.10011 4.39455Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M10.541 2.31667C10.541 2.14178 10.6828 2 10.8577 2H13.391C13.5659 2 13.7077 2.14178 13.7077 2.31667V3.58333H10.541V2.31667Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Firstname">Sadiq</td>
            <td data-label="Lastname">Abdullayev</td>
            <td data-label="E-poçt">sadiq.abdullayev1903@..</td>
            <td data-label="Firstname Init">Men</td>
            <td data-label="Edit">
              <div class="edit-area">
                <div class="edit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8066 5.65942L18.4661 9.31888L7.48773 20.2972L3.82828 20.2972L3.82828 16.6378L14.8066 5.65942Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M18.4668 2L22.1263 5.65945L19.1987 8.58702L17.369 6.75729L15.5392 4.92756L18.4668 2Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
                <div class="delete-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.1875"
                      y="8.33337"
                      width="11.875"
                      height="12.6667"
                      rx="1"
                      fill="#5C545E"
                    />
                    <path
                      d="M5.10011 4.39455C5.04933 4.19442 5.20058 4 5.40705 4H18.8429C19.0494 4 19.2007 4.19442 19.1499 4.39455L18.5189 6.88122C18.4833 7.02166 18.3569 7.12 18.212 7.12H6.03802C5.89313 7.12 5.76671 7.02166 5.73108 6.88122L5.10011 4.39455Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M10.541 2.31667C10.541 2.14178 10.6828 2 10.8577 2H13.391C13.5659 2 13.7077 2.14178 13.7077 2.31667V3.58333H10.541V2.31667Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Firstname">Sadiq</td>
            <td data-label="Lastname">Abdullayev</td>
            <td data-label="E-poçt">sadiq.abdullayev1903@..</td>
            <td data-label="Firstname Init">Men</td>
            <td data-label="Edit">
              <div class="edit-area">
                <div class="edit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8066 5.65942L18.4661 9.31888L7.48773 20.2972L3.82828 20.2972L3.82828 16.6378L14.8066 5.65942Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M18.4668 2L22.1263 5.65945L19.1987 8.58702L17.369 6.75729L15.5392 4.92756L18.4668 2Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
                <div class="delete-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.1875"
                      y="8.33337"
                      width="11.875"
                      height="12.6667"
                      rx="1"
                      fill="#5C545E"
                    />
                    <path
                      d="M5.10011 4.39455C5.04933 4.19442 5.20058 4 5.40705 4H18.8429C19.0494 4 19.2007 4.19442 19.1499 4.39455L18.5189 6.88122C18.4833 7.02166 18.3569 7.12 18.212 7.12H6.03802C5.89313 7.12 5.76671 7.02166 5.73108 6.88122L5.10011 4.39455Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M10.541 2.31667C10.541 2.14178 10.6828 2 10.8577 2H13.391C13.5659 2 13.7077 2.14178 13.7077 2.31667V3.58333H10.541V2.31667Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td scope="row" data-label="Firstname">Sadiq</td>
            <td data-label="Lastname">Abdullayev</td>
            <td data-label="E-poçt">sadiq.abdullayev1903@..</td>
            <td data-label="Firstname Init">Men</td>
            <td data-label="Edit">
              <div class="edit-area">
                <div class="edit-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8066 5.65942L18.4661 9.31888L7.48773 20.2972L3.82828 20.2972L3.82828 16.6378L14.8066 5.65942Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M18.4668 2L22.1263 5.65945L19.1987 8.58702L17.369 6.75729L15.5392 4.92756L18.4668 2Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
                <div class="delete-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="6.1875"
                      y="8.33337"
                      width="11.875"
                      height="12.6667"
                      rx="1"
                      fill="#5C545E"
                    />
                    <path
                      d="M5.10011 4.39455C5.04933 4.19442 5.20058 4 5.40705 4H18.8429C19.0494 4 19.2007 4.19442 19.1499 4.39455L18.5189 6.88122C18.4833 7.02166 18.3569 7.12 18.212 7.12H6.03802C5.89313 7.12 5.76671 7.02166 5.73108 6.88122L5.10011 4.39455Z"
                      fill="#5C545E"
                    />
                    <path
                      d="M10.541 2.31667C10.541 2.14178 10.6828 2 10.8577 2H13.391C13.5659 2 13.7077 2.14178 13.7077 2.31667V3.58333H10.541V2.31667Z"
                      fill="#5C545E"
                    />
                  </svg>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="btn-area">
        <span id="close-history-btn">Geri</span>
      </div>
    </div>
    <div class="history-overlay"></div>
  </div>
</div>
  `;
}

// renderCode();

/* -------------------------------- Language -------------------------------- */
var textInpErr;
var textEmailErr;
var fileErr;

function detectLangError() {
  const currentUrl = window.location.href;
  let url = currentUrl.split("/");
  const langCode = url[3];
  if (langCode === "az") {
    textInpErr = "Boş ola bilməz!";
    textEmailErr = "Email adres yanlışdır!";
    textEmailErr = "Seçili fayl yoxdur";
  } else {
    textInpErr = "It can't be empty!";
    textEmailErr = "No file selected";
  }
}

detectLangError();

/* -------------------------- Native input file JS -------------------------- */
const fileInput1 = document.getElementById("file-input-1");
const fileInput2 = document.getElementById("file-input-2");
const fileInput3 = document.getElementById("file-input-3");
let inp = [fileInput1, fileInput2, fileInput3];
for (let i = 0; i < inp.length; i++) {
  inp[i].addEventListener("change", () => {
    if (inp[i].value === "") {
      inp[i].nextElementSibling.innerHTML = fileErr;
    } else {
      const realPathArray = inp[i].value.split("\\");
      inp[i].nextElementSibling.innerHTML =
        realPathArray[realPathArray.length - 1];
    }
  });
}

/* --------------------------------- Select Start --------------------------------- */
var select = false;
let overlay = document.querySelector(".overlay");
let selectBox = document.querySelectorAll(".select-list");

function openSelect(event, id) {
  if (select) {
    // Close Select List
    document.getElementById(id).classList.remove("active-select");
    document.getElementById(id).style.height = 0;
    overlay.classList.remove("isOpen");
    select = false;
  } else {
    // Open Select List
    document.getElementById(id).classList.add("active-select");
    // Dinamic height && animation
    if (document.getElementById(id).children.length < 3) {
      document.getElementById(id).style.height = `${
        45 * document.getElementById(id).children.length
      }px`;
    } else {
      document.getElementById(id).style.height = `${45 * 3}px`;
    }
    overlay.classList.add("isOpen");
    if (document.getElementById(id).id === id) {
      // console.log(document.getElementById(id).children)
      let tablinks = document.getElementById(id).children;
      //   Select Item Dom Walking
      for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", (e) => {
          //   Change Select Text Content
          let parentElementText =
            tablinks[i].parentElement.parentElement.firstElementChild;
          parentElementText.children[0].innerHTML = tablinks[i].textContent;
          parentElementText.parentElement.style.borderColor = "#1f4586";
          // Update Active Item
          for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove("active-item");
          }
          tablinks[i].classList.add("active-item");

          //   Close Select List
          document.getElementById(id).classList.remove("active-select");
          document.getElementById(id).style.height = 0;
          overlay.classList.remove("isOpen");
          select = false;
        });
      }
    }
    select = true;
  }
}
// Close Select && Ovarlay
overlay.addEventListener("click", () => {
  for (let i = 0; i < selectBox.length; i++) {
    selectBox[i].classList.remove("active-select");
    selectBox[i].style.height = 0;
  }
  overlay.classList.remove("isOpen");
  select = false;
});

/* ------------------------------- Select End ------------------------------- */

let textArea = document.querySelectorAll("textarea");
let inpText = document.querySelectorAll('input[type="text"]');
let emailInp = document.querySelector("#email");
let checkboxLive = document.querySelector("#checkbox-live");
let checkboxVirtual = document.querySelector("#checkbox-virtual");
let checkArr = [checkboxLive, checkboxVirtual];

/* -------------------------- Reset textarea error -------------------------- */
for (let i = 0; i < textArea.length; i++) {
  textArea[i].addEventListener("input", () => {
    if (textArea[i].style.borderColor != "#1f4586") {
      textArea[i].style.borderColor = "#1f4586";
    } else {
      return true;
    }
    let size = textArea[i].nextElementSibling.children;
    size[0].innerHTML = Number(size[1].textContent) - textArea[i].value.length;
  });
}

function resetError() {
  // type text inputs
  for (let i = 0; i < inpText.length; i++) {
    inpText[i].addEventListener("input", () => {
      let error = inpText[i].nextElementSibling;
      if (error.textContent === "") {
        return true;
      } else {
        error.innerHTML = "";
      }
    });
  }
  // email
  emailInp.addEventListener("input", () => {
    emailInp.nextElementSibling.innerHTML = "";
  });
  // checkbox
  for (let i = 0; i < checkArr.length; i++) {
    checkArr[i].addEventListener("input", () => {
      for (let j = 0; j < checkArr.length; j++) {
        checkArr[j].parentElement.style.borderColor = "#1f4586";
      }
    });
  }
}
resetError();

// Validation
let formAbstract = document.querySelector("#abstract-form");
formAbstract.addEventListener("submit", (event) => {
  event.preventDefault();
  let nameInp = document.querySelector("#name");
  let selectFirst = document.querySelector("#select-first-text");
  let selectsecond = document.querySelector("#select-second-text");
  let selectThird = document.querySelector("#select-third-text");
  let selectFourth = document.querySelector("#select-fourth-text");
  let selectFive = document.querySelector("#select-five-text");
  let mainPersonal = document.querySelector("main-personal-name");
  let personalNameInp = document.querySelector("#personal-name");
  let personalSurnameInp = document.querySelector("#personal-surname");
  let fatherNameInp = document.querySelector("#father-name");
  let countryInp = document.querySelector("#country");
  let townInp = document.querySelector("#town");
  let companyNameInp = document.querySelector("#company-name");
  let summaryTextarea = document.querySelector("#summary");
  let methodsTextarea = document.querySelector("#methods");
  let resultsTextarea = document.querySelector("#results");
  let discussionTextarea = document.querySelector("#discussion");
  let imgFirst = document.querySelector("#file-input-1");
  let wordFile = document.querySelector("#file-input-2");
  let imgSecond = document.querySelector("#file-input-3");
  let keyWordFirstInp = document.querySelector("#key-word-first");
  let keyWordSecondInp = document.querySelector("#key-word-second");
  let keyWordThirdtInp = document.querySelector("#key-word-third");
  let optionCheckboxFirst = document.querySelector("#first-text");
  let optionCheckboxSecond = document.querySelector("#second-text");
  let optionCheckboxThird = document.querySelector("#third-text");
  let selectText = document.querySelectorAll(".text");
  var isValid;
  isValid = true;
  /* ----------------------- Type text INPUT value check ---------------------- */
  for (let i = 0; i < inpText.length; i++) {
    if (inpText[i].value.trim() === "") {
      inpText[i].nextElementSibling.innerHTML = textInpErr;
      inpText[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ------------------------------ Select Check ------------------------------ */
  for (let i = 0; i < selectText.length; i++) {
    if (
      selectText[i].textContent === "Seç" ||
      selectText[i].textContent === "Choose"
    ) {
      let selectTextParent = selectText[i].parentElement.parentElement;
      selectTextParent.style.borderColor = "#ff014f";
      selectTextParent.scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ----------------------------- Textarea check ----------------------------- */
  for (let i = 0; i < textArea.length; i++) {
    if (textArea[i].value.trim() === "") {
      textArea[i].style.borderColor = "#ff014f";
      textArea[i].scrollIntoView({ behavior: "smooth", block: "center" });
      isValid = false;
    }
  }

  /* ------------------------------- Email Check ------------------------------ */
  if (emailInp.value.trim() === "") {
    emailInp.nextElementSibling.innerHTML = textInpErr;
    emailInp.scrollIntoView({ behavior: "smooth", block: "center" });
    isValid = false;
  } else if (!validateEmail(emailInp.value.trim())) {
    emailInp.nextElementSibling.innerHTML = textEmailErr;
    emailInp.scrollIntoView({ behavior: "smooth", block: "center" });
    isValid = false;
  }

  /* --------------------------- Check Virtual Live --------------------------- */
  if (checkboxLive.checked === false && checkboxVirtual.checked === false) {
    checkboxLive.parentElement.style.borderColor = "#ff014f";
    checkboxVirtual.parentElement.style.borderColor = "#ff014f";
    checkboxLive.parentElement.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    isValid = false;
  }

  if (isValid) {
    const formData = new FormData();
    formData.append("name", nameInp.value);
    formData.append("selectFirst ", selectFirst.textContent);
    formData.append("selectsecond ", selectsecond.textContent);
    formData.append("selectThird ", selectThird.textContent);
    formData.append("selectFourth ", selectFourth.textContent);
    formData.append("checkboxLive ", checkboxLive.checked);
    formData.append("checkboxVirtual", checkboxVirtual.checked);
    formData.append("personalName", personalNameInp.value);
    formData.append("personalSurname", personalSurnameInp.value);
    formData.append("fatherName", fatherNameInp.value);
    formData.append("country", countryInp.value);
    formData.append("town", townInp.value);
    formData.append("email", emailInp.value);
    formData.append("companyName", companyNameInp.value);
    formData.append("summaryTextarea", summaryTextarea.value);
    formData.append("methodsTextarea", methodsTextarea.value);
    formData.append("resultsTextarea", resultsTextarea.value);
    formData.append("discussionTextarea", discussionTextarea.value);
    formData.append("img1", imgFirst.files[0]);
    formData.append("word", wordFile.files[0]);
    formData.append("img2", imgSecond.files[0]);
    formData.append("keyWordFirst", keyWordFirstInp.value);
    formData.append("keyWordSecond", keyWordSecondInp.value);
    formData.append("keyWordThird", keyWordThirdtInp.value);
    formData.append("optionCheckboxFirst", optionCheckboxFirst.checked);
    formData.append("optionCheckboxSecond", optionCheckboxSecond.checked);
    formData.append("optionCheckboxThird", optionCheckboxThird.checked);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    /* -------------------------------- SEND DATA ------------------------------- */
    if (event.submitter.id === "btnSend") {
      axios
        .post("http://localhost:5000/api/products", formData)
        .then((res) => {
          if (res) {
            Swal.fire({
              position: "center",
              icon: "success",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        })
        .catch((err) => console.log(err.message));
    } else if (event.submitter.id === "btnSave") {
      console.log("btnSave");
    }
  }
});
/* ------------------------------- CHECK EMAIL ------------------------------ */
function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(email);
}

/* ------------------------------ History open ------------------------------ */
let historyBtn = document.querySelector("#history-abstract-btn");
let closeHistoryBtn = document.querySelector("#close-history-btn");
let history = document.querySelector(".abstract-history");
let historyoverlay = document.querySelector(".history-overlay");

var historyIsOpen = false;
historyBtn.addEventListener("click", () => {
  if (!historyIsOpen) {
    history.classList.add("active");
    historyoverlay.classList.add("isOpen");
    historyIsOpen = true;
  }
});
/* ------------------------------ Close History Start ----------------------------- */
closeHistoryBtn.addEventListener("click", () => {
  if (historyIsOpen) {
    history.classList.remove("active");
    overlay.classList.remove("isHistoryOpen");
    historyIsOpen = false;
  }
});
historyoverlay.addEventListener("click", () => {
  console.log("g");
  if (historyIsOpen) {
    history.classList.remove("active");
    overlay.classList.remove("isHistoryOpen");
    historyIsOpen = false;
  }
});

/* ------------------------------ Close History End ----------------------------- */

let isADD = true;
let personalInformation = [];
let personalAreaInp = document.querySelectorAll(".personal-check");
let personalAddBtn = document.querySelector("#personal-add");
let personalArea = document.querySelector("#personal-area");
personalAddBtn.addEventListener("click", () => {
  for (let i = 0; i < personalAreaInp.length; i++) {
    /* --------------------------- Type Text Inp Check -------------------------- */
    if (personalAreaInp[i].type === "text" && personalAreaInp[i].value === "") {
      personalAreaInp[i].nextElementSibling.innerHTML = textInpErr;
      personalAreaInp[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      isADD = false;
    }

    /* ------------------------------- Email Check ------------------------------ */
    if (
      personalAreaInp[i].type === "email" &&
      personalAreaInp[i].value === ""
    ) {
      if (personalAreaInp[i].value.trim() === "") {
        personalAreaInp[i].nextElementSibling.innerHTML = textInpErr;
        personalAreaInp[i].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        isADD = false;
      } else if (!validateEmail(personalAreaInp[i].value.trim())) {
        personalAreaInp[i].nextElementSibling.innerHTML = textEmailErr;
        personalAreaInp[i].scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        isADD = false;
      }
    }
  }
  if (isADD) {
    for (let i = 0; i < personalAreaInp.length; i++) {
      let newId = "";
      const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 5; i++) {
        newId += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      var personal = {
        id: newId,
        mainName: personalAreaInp[0].value,
        name: personalAreaInp[1].value,
        surname: personalAreaInp[2].value,
        fatherName: personalAreaInp[3].value,
        country: personalAreaInp[4].value,
        town: personalAreaInp[5].value,
        email: personalAreaInp[6].value,
        companyName: personalAreaInp[7].value,
      };
    }
    personalInformation.push(personal);
    addPersonalInfo(personalInformation);
  }
});

var deleteBtns;
function addPersonalInfo() {
  let newCart = personalInformation.map((item) => {
    return `
    <div class="personal-card">
    <ul class="personal-list">
      <li class="personales">
        <div class="title">Təqdimi mən edəcəm</div>
        <p class="text">Men</p>
      </li>
      <li class="personales">
        <div class="title">Müəllifin tam adı</div>
        <p class="text">${item.mainName}</p>
      </li>
      <li class="personales">
        <div class="title">Ad</div>
        <p class="text">${item.name}</p>
      </li>
      <li class="personales">
        <div class="title">Soyad</div>
        <p class="text">${item.surname}</p>
      </li>
      <li class="personales">
        <div class="title">Ata adı</div>
        <p class="text">${item.fatherName}</p>
      </li>
      <li class="personales">
        <div class="title">Ölkə</div>
        <p class="text">${item.country}</p>
      </li>
      <li class="personales">
        <div class="title">Şəhər</div>
        <p class="text">${item.town}</p>
      </li>
      <li class="personales">
        <div class="title">E-Poçt ünvanı</div>
        <p class="text">${item.email}</p>
      </li>
      <li class="personales">
      <div class="title">Təmsil etdiyiniz müəssisə</div>
      <p class="text">${item.companyName}</p>
    </li>
      <li class="personales">
        <div class="title">Fəaliyyət</div>
        <p class="text">
        <span class="delete" id="${item.id}">Sil</span>
        </p>
      </li>
    </ul>
  </div>
    `;
  });
  personalArea.innerHTML = newCart;
}

let deletePersonal = document.querySelectorAll(".delete");
console.log(deletePersonal);
deletePersonal.forEach((deleteBtn) => {
  deleteBtn.onclick = function () {
    console.log(this.parentElement);
  };
});
