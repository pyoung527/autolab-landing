# 📄 Landing Page Development Spec 
## 0. Overview

**Goal**

* 연구 자동화 솔루션 상담 신청 전환 (Conversion)
* 타겟: 실험실 연구자 / 엔지니어 / 대학원생

**Primary Action**

* CTA 클릭 → 상담 신청 (폼 제출 or 외부 캘린더 연결)

**Page Type**

* Single Page Scroll Landing

---

## 1. Global Layout

```yaml
layout:
  type: single_page_scroll
  sections:
    - hero
    - pain_points
    - solution
    - trust_process
    - final_cta
```

```yaml
design_system:
  colors:
    primary: "#0A1F44"        # Deep Blue
    accent: "#00E5FF"         # Neon Blue
    background_dark: "#050B1A"
    text_primary: "#FFFFFF"
    text_secondary: "#A0AEC0"

  typography:
    headline: "bold, large (32~48px)"
    body: "regular (16~18px)"

  ui_style:
    theme: "dark + neon"
    animation: "fade-in + slight upward motion"
```

---

## 2. Section Spec

---

### 2.1 Hero Section

```yaml
section_id: hero

content:
  headline: "아직도 실험실에서 밤을 지새우고 계신가요?"
  highlight_text: "딸깍"
  sub_copy: "당신의 실험을 자동화하는 데 집중합니다."
  cta_text: "지금 바로 상담 신청"

assets:
  background_image: "lab_night_dark.jpg"
  overlay_image: "automation_dashboard_ui.png"

ui:
  layout: "centered"
  text_align: "left"
  cta_style: "primary_button"

interaction:
  on_cta_click:
    action: "scroll_to_form"  # or open modal
```

**AI Agent Implementation Notes**

* headline 내 `"딸깍"`은 강조 스타일 적용 (bold + accent color)
* 배경은 어둡고, dashboard는 밝게 contrast
* CTA 버튼 hover 시 glow 효과

---

### 2.2 Pain Points Section

```yaml
section_id: pain_points

headline: "연구자가 집중해야 할 것은 '노가다'가 아닙니다"

items:
  - icon: "repeat"
    title: "반복 작업"
    description: "데이터 하나마다 수동 클릭 반복"

  - icon: "moon"
    title: "야근"
    description: "로그 기록 때문에 퇴근 지연"

  - icon: "warning"
    title: "휴먼 에러"
    description: "졸음으로 인한 측정 실수"

  - icon: "table"
    title: "데이터 정리"
    description: "엑셀 수작업 과다"

ui:
  layout: "4_card_grid"
  card_style: "glassmorphism_dark"
```

**AI Agent Rules**

* 각 카드 hover 시 약간 확대 (scale 1.05)
* 아이콘은 line style (neon stroke)

---

### 2.3 Solution Section

```yaml
section_id: solution

headline: "실험실에 자동화 엔진을 추가하세요"

features:
  - title: "데이터 자동 수집"
    description: "모든 계측 장비 연결 및 실시간 수집"
    visual: "device_connection_diagram"

  - title: "조건 기반 자동화"
    description: "조건 트리거 기반 실행"
    visual: "logic_flow_chart"

  - title: "실시간 대시보드"
    description: "데이터 즉시 시각화"
    visual: "dashboard_chart"

  - title: "자동 보고서"
    description: "실험 종료 즉시 결과 생성"
    visual: "report_preview"
```

**AI Agent Behavior**

* 스크롤 시 feature 하나씩 순차 등장 (stagger animation)
* 각 feature는 좌우 alternating layout

---

### 2.4 Trust & Process Section

```yaml
section_id: process

headline: "도입 과정은 간단합니다"

steps:
  - step: 1
    title: "현장 진단"
    description: "장비 및 프로세스 분석"

  - step: 2
    title: "설계"
    description: "자동화 구조 설계"

  - step: 3
    title: "구축"
    description: "원클릭 시스템 개발"

  - step: 4
    title: "사후 관리"
    description: "지속적 업데이트"

philosophy:
  text: "지루한 과정은 우리가 맡고, 당신은 발견에 집중하세요"
```

**UI**

```yaml
layout: "horizontal_stepper"
```

---

### 2.5 Final CTA Section

```yaml
section_id: final_cta

headline: "내일 아침은 집에서 맞이하세요"
sub_copy: "더 이상 실험실에 남지 않아도 됩니다"
cta_text: "무료 진단 받기"

ui:
  background: "gradient_dark_to_neon"
  cta_style: "large_primary"
```

---

## 3. Form / Conversion Spec

```yaml
form:
  fields:
    - name: "name"
      type: "text"
    - name: "email"
      type: "email"
    - name: "organization"
      type: "text"
    - name: "use_case"
      type: "textarea"

  submit_action:
    type: "api_call"
    endpoint: "/api/lead"

  success_state:
    message: "신청이 완료되었습니다. 곧 연락드립니다."
```

---

## 4. Animation & Interaction Rules (AI 중요)

```yaml
animation:
  scroll_trigger: true
  default:
    effect: "fade_in_up"
    duration: 0.6s

  hero:
    headline_delay: 0.2s
    cta_delay: 0.6s

  cards:
    stagger: 0.15s
```

---

## 5. AI Agent Task Breakdown

```yaml
tasks:
  - build_layout
  - apply_design_system
  - render_sections
  - attach_scroll_animation
  - implement_cta_logic
  - connect_form_api
```

---

## 6. 개선 포인트 (중요)

현재 기획 대비 보완된 핵심:

1. **추상 → 구조화**

   * "좋은 카피" → "데이터 기반 UI 정의"

2. **AI 실행 가능 상태**

   * 각 요소가 JSON/YAML로 정의됨
   * 바로 컴포넌트 생성 가능

3. **인터랙션 명시**

   * hover, scroll, animation 포함

4. **Conversion 흐름 추가**

   * CTA → Form → API → Success

---
추가하면 좋은 것:

🔥 1. Before / After 비교 섹션
[Before] 밤샘 / 수동 클릭
[After] 자동화 / 수면
🔥 2. 실제 느낌 UI (핵심)
가짜 대시보드라도 넣기
그래프 움직이게 만들기
🔥 3. CTA 반복 배치
Hero
중간
마지막