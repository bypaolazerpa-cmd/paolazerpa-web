export type CaseStudyVisual = {
  type: string;
  title: string;
  description?: string;
};

export type CaseStudyDecision = {
  number: string;
  title: string;
  situation?: string;
  decision?: string;
  criterion?: string;
  status?: string;
  visual: CaseStudyVisual;
};

export type CaseStudySection = {
  number: string;
  label: string;
  headline?: string;
  copy?: string[];
  visual?: CaseStudyVisual;
  visuals?: CaseStudyVisual[];
  blocks?: { title: string; copy: string; visual?: CaseStudyVisual }[];
  highlight?: string;
};

export type PortfolioCaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  transformation: string;
  summary: string;
  metadata: { label: string; value: string }[];
  sections: CaseStudySection[];
  decisions?: CaseStudyDecision[];
  learnings?: string[];
  statusLabel?: string;
  statusBlocks?: { title: string; items?: string[]; copy?: string }[];
  nextProject: string;
};

const visual = (type: string, title: string, description?: string): CaseStudyVisual => ({ type, title, description });

export const portfolioData: Record<string, PortfolioCaseStudy> = {
  nodux: {
    slug: "nodux",
    title: "NODUX",
    eyebrow: "01 — PRODUCTO DIGITAL · SAAS",
    transformation: "De gestionar catálogo, pedidos y tienda en partes separadas a conectarlos dentro de un mismo producto.",
    summary: "NODUX es un producto digital para gestionar parte de la operación comercial de un negocio y conectar esa gestión con su tienda online.",
    metadata: [
      { label: "Tipo", value: "SaaS · gestión comercial · e-commerce" },
      { label: "Mi participación", value: "Product Design" },
      { label: "Foco", value: "Producto · información · personas" },
      { label: "Estado", value: "Producto en evolución" },
    ],
    sections: [
      { number: "02", label: "Contexto", headline: "Un producto que fue creciendo mientras también crecía lo que necesitaba resolver.", copy: ["NODUX reúne funciones relacionadas con catálogo, ventas, inventario, pedidos y tienda online. A medida que el producto creció, también aumentaron las relaciones entre pantallas, reglas, información y decisiones que una persona necesita comprender para usarlo.", "Durante sus primeras etapas, gran parte de esa lógica podía sostenerse porque quienes construíamos el producto también sabíamos cómo funcionaba. Pero esa dependencia empezó a convertirse en parte del problema."], visual: visual("Mapa", "Mapa general del producto") },
      { number: "03", label: "El problema", headline: "El producto tenía que empezar a explicar por sí mismo cómo usarlo.", copy: ["El desafío dejó de ser solamente mejorar pantallas individuales. NODUX necesitaba convertirse en un sistema donde una persona pudiera entender qué configurar, qué información necesitaba, qué podía hacer en cada momento y cómo una acción afectaba otras partes del producto.", "La pregunta pasó a ser:\n¿Puede una persona entender NODUX, empezar a usarlo, conseguir lo que vino a conseguir y seguir utilizándolo sin depender de quienes lo construyeron?"] , highlight: "Hacer que el conocimiento del producto deje de vivir únicamente en la cabeza de sus creadores." },
      { number: "04", label: "Mi participación", headline: "Trabajé sobre el comportamiento del producto, no solo sobre sus pantallas.", copy: ["Mi trabajo ha incluido definir y revisar recorridos, arquitectura de información, lógica, estados, interacción e interfaz, además de acompañar decisiones durante la implementación y volver sobre ellas a medida que el producto evoluciona.", "También utilizo implementación asistida con IA como parte del proceso para construir, probar y revisar decisiones sobre el producto funcionando."], blocks: [{ title: "Áreas de trabajo", copy: "Product Design · Information Architecture · User Flows · Interaction Design · UI · Systems Thinking · AI-assisted implementation" }] },
      { number: "05", label: "Entender el sistema", headline: "Una decisión en una pantalla casi nunca termina en esa pantalla.", copy: ["Para diseñar NODUX necesito entender cómo se relacionan distintas capas del producto: el negocio, su catálogo, la tienda online, los pedidos, la operación interna y la experiencia del cliente final.", "Eso cambia la pregunta de ‘¿cómo debería verse esta pantalla?’ por preguntas como:\n¿Qué información necesita existir antes?\n¿Qué acción habilita esta decisión?\n¿Quién necesita verla después?\n¿Qué cambia en otra parte del producto?"] , visual: visual("Esquema conceptual", "Relación entre capas del producto", "Esquema conceptual, no arquitectura técnica exhaustiva.") },
      { number: "07", label: "La solución en uso", headline: "Un mismo producto, distintos momentos de uso.", blocks: [
        { title: "Gestionar catálogo", copy: "Organizar la información que después alimentará otras partes del producto.", visual: visual("Flujo", "Carga y organización de catálogo") },
        { title: "Configurar la tienda", copy: "Definir los datos y decisiones que hacen posible vender online.", visual: visual("Flujo", "Configuración de tienda") },
        { title: "Recibir y gestionar pedidos", copy: "Convertir una compra en información accionable para el negocio.", visual: visual("Flujo", "Gestión de pedidos") },
        { title: "Comprar y hacer seguimiento", copy: "Permitir que el cliente final complete la compra y entienda qué ocurre después.", visual: visual("Flujo", "Compra y seguimiento") },
      ] },
      { number: "08", label: "Dónde está hoy", headline: "NODUX existe, se usa y todavía está aprendiendo a funcionar con menos dependencia de nosotros.", copy: ["El producto ya reúne distintas partes de la operación comercial y existen negocios utilizándolo. Al mismo tiempo, todavía hay aspectos —especialmente relacionados con configuración, activación y autonomía— que continúan evolucionando.", "Por eso no considero el producto terminado. Parte del trabajo actual consiste precisamente en identificar qué conocimiento todavía depende del equipo y convertirlo en estructura, información y comportamiento dentro del propio producto."], highlight: "¿Qué necesita saber el producto para poder orientar a una persona sin que nosotros estemos presentes?" },
    ],
    decisions: [
      { number: "01", title: "Permitir cargar el catálogo que el negocio ya tiene.", situation: "Un comercio puede llegar a NODUX con información organizada de maneras muy distintas.", decision: "En lugar de obligar primero a comprender la estructura interna del sistema, el producto debe poder recibir la información existente y ayudar a estructurarla.", criterion: "Reducir la distancia entre la forma en que el negocio trabaja hoy y la forma en que NODUX necesita organizar esa información.", status: "Dirección de producto en desarrollo.", visual: visual("Evidencia pendiente", "Carga de catálogo / IA") },
      { number: "02", title: "Conectar gestión y tienda online.", situation: "La tienda pública no puede funcionar como una pieza aislada del sistema de gestión.", decision: "Catálogo, disponibilidad, información comercial, compra y pedidos necesitan compartir una lógica coherente.", criterion: "La experiencia del cliente final depende de decisiones que empiezan mucho antes del storefront.", visual: visual("Evidencia pendiente", "Relación panel / storefront") },
      { number: "03", title: "Hacer visible qué necesita configurar el negocio.", situation: "Parte de la activación histórica de las tiendas dependía de acompañamiento del equipo.", decision: "Trabajar el producto para que pueda mostrar qué está listo, qué falta y qué decisiones necesita tomar el negocio.", criterion: "Convertir conocimiento interno en orientación visible dentro del producto.", status: "En evolución.", visual: visual("Evidencia pendiente", "Activación / progreso") },
      { number: "04", title: "Conectar pedido y seguimiento.", situation: "La compra no termina cuando el cliente confirma el pedido.", decision: "Diseñar estados y seguimiento para que negocio y cliente puedan entender qué ocurrió y qué sigue.", criterion: "El estado de un pedido es información operativa para el negocio y, al mismo tiempo, información de experiencia para el cliente.", visual: visual("Evidencia pendiente", "Pedido / tracking") },
    ],
    statusBlocks: [
      { title: "Ya existe", items: ["gestión de partes de la operación comercial", "storefront / tienda online", "pedidos y seguimiento", "configuración del producto"] },
      { title: "En evolución", items: ["activación más autónoma", "orientación dentro del producto", "reducción de dependencias del equipo"] },
      { title: "Siguiente pregunta", copy: "¿Qué necesita saber el producto para poder orientar a una persona sin que nosotros estemos presentes?" },
    ],
    learnings: ["Una pantalla más clara no necesariamente hace más claro el producto si la lógica que conecta esa pantalla con el resto sigue siendo implícita.", "Diseñar autonomía también significa diseñar cómo el producto comunica lo que sabe y lo que necesita del usuario.", "Cuando un producto crece, arquitectura, información e interacción dejan de poder resolverse como decisiones separadas."],
    nextProject: "gestock",
  },
  gestock: {
    slug: "gestock", title: "GeStock", eyebrow: "02 — PRODUCTO DIGITAL · OPERACIONES", transformation: "De controlar stock, vencimientos e información de productos de forma manual y dispersa a gestionarlos desde un solo sistema.", summary: "GeStock nació de problemas cotidianos de operación en tienda y se convirtió en una primera solución digital para ordenar parte de ese trabajo.", metadata: [{ label: "Tipo", value: "Sistema de gestión" }, { label: "Contexto", value: "Operación de tienda" }, { label: "Mi participación", value: "Definición del problema · estructura · flujos · interfaz · pruebas en contexto real" }, { label: "Evolución", value: "Antecedente de NODUX" }],
    sections: [
      { number: "02", label: "Contexto", headline: "Antes de ser una pantalla, el problema ocurría todos los días en la operación.", copy: ["Controlar productos, stock, vencimientos, proveedores e información operativa implicaba combinar memoria, registros y herramientas que no siempre estaban conectadas entre sí.", "GeStock nació como una respuesta a necesidades observadas en ese contexto cotidiano."], visual: visual("Contexto", "Operación de tienda") },
      { number: "03", label: "El problema", headline: "Había información importante, pero estaba dispersa.", copy: ["El problema no era simplemente digitalizar una planilla. Había que decidir qué información necesitaba existir, cómo se relacionaban los productos con el stock y los vencimientos, qué acciones necesitaba realizar una persona y qué debía ser visible para poder tomar decisiones durante la operación."] },
      { number: "04", label: "Mi participación", copy: ["Trabajé identificando problemas operativos, definiendo lógica y recorridos, organizando información y diseñando la interfaz. La solución se probaba en un contexto real y se ajustaba a partir de lo que ocurría durante el uso."] },
      { number: "05", label: "Del problema al sistema", headline: "Convertir una operación cotidiana en una lógica que pudiera vivir dentro de un producto.", visual: visual("Esquema", "Productos · stock · vencimientos · proveedores · acciones → gestión más centralizada", "Flujo conceptual; no representa una arquitectura técnica exhaustiva.") },
      { number: "06", label: "Decisiones", blocks: [
        { title: "Centralizar información que antes se consultaba en distintos lugares.", copy: "", visual: visual("Evidencia pendiente", "Organización de información") },
        { title: "Diseñar los flujos desde tareas reales de operación y no desde una estructura abstracta del sistema.", copy: "", visual: visual("Evidencia pendiente", "Flujo de operación") },
        { title: "Probar decisiones en el contexto donde realmente iban a utilizarse.", copy: "", visual: visual("Evidencia pendiente", "Prueba en contexto real") },
      ] },
      { number: "07", label: "Qué cambió", copy: ["GeStock permitió convertir necesidades operativas concretas en un sistema digital con una estructura común para trabajar con esa información.", "Más adelante, parte de esos problemas y aprendizajes se convirtieron en el punto de partida para pensar un producto más amplio: NODUX."] },
      { number: "08", label: "Aprendizaje", highlight: "Diseñar el sistema me obligó a traducir cómo funcionaba una operación real en información, relaciones y acciones que otras personas pudieran usar." },
    ], nextProject: "operacion-de-tienda",
  },
  "operacion-de-tienda": {
    slug: "operacion-de-tienda", title: "Sistemas de operación de tienda", eyebrow: "03 — OPERACIONES · SISTEMAS DE TRABAJO", transformation: "De depender de memoria, mensajes y seguimiento informal a tener tareas, información y responsabilidades más visibles.", summary: "Procesos y herramientas creados para ordenar necesidades concretas de la operación cotidiana de una tienda.", metadata: [{ label: "Tipo", value: "Sistemas de trabajo" }, { label: "Contexto", value: "Operaciones" }, { label: "Foco", value: "Información · procesos · responsabilidades" }],
    sections: [
      { number: "02", label: "Contexto", headline: "Muchos problemas de operación no necesitan primero una app. Necesitan estructura.", copy: ["En el trabajo cotidiano aparecen tareas que se repiten, información que cambia, responsabilidades compartidas y decisiones que dependen de que alguien recuerde qué hacer.", "Parte de mi trabajo en operaciones consistió en detectar esos puntos y crear formas más visibles de organizar el trabajo."] },
      { number: "03", label: "Problemas recurrentes", blocks: [{ title: "Información dispersa", copy: "Datos importantes repartidos entre memoria, mensajes o documentos." }, { title: "Seguimiento", copy: "Tareas que dependían de recordar cuándo revisar o volver sobre algo." }, { title: "Responsabilidades", copy: "Necesidad de hacer visible quién debía hacer qué." }, { title: "Proveedores / productos", copy: "Información que necesitaba mantenerse disponible y organizada para operar." }] },
      { number: "04", label: "Cómo intervenía", headline: "Observar, ordenar y convertir el problema en una forma de trabajo.", copy: ["Cuando detectaba un problema repetido, intentaba entender qué información intervenía, quién necesitaba usarla, qué decisión había que tomar y qué herramienta podía hacer ese trabajo más visible y sostenible."] },
      { number: "05", label: "Sistemas creados", blocks: ["organización de tareas", "seguimiento", "vencimientos", "proveedores", "registros operativos", "controles"].map((title) => ({ title, copy: "Herramientas, tableros, registros y formas de trabajo.", visual: visual("Evidencia pendiente", "Evidencia real") })) },
      { number: "06", label: "Qué me dejó", copy: ["Este contexto fue importante para mi manera de diseñar productos después.", "Me enseñó que muchas veces el problema no está en una pantalla: está en cómo circula la información, quién necesita verla, qué depende de qué y qué ocurre cuando una parte del sistema falla."], highlight: "Antes de aprender Product Design, ya estaba intentando hacer visibles sistemas que eran difíciles de sostener de memoria." },
      { number: "07", label: "Conexión con Product Design", headline: "De organizar una operación a diseñar productos que necesitan sostenerla.", copy: ["Más adelante, esas mismas preguntas aparecieron al trabajar sobre productos digitales: qué información necesita existir, qué relación tiene con otras partes, qué acciones debe permitir el sistema y qué necesita comprender una persona para poder usarlo."] },
    ], nextProject: "cosmic-studio",
  },
  "cosmic-studio": {
    slug: "cosmic-studio", title: "Cosmic Studio", eyebrow: "04 — MARCA · EXPERIENCIA DIGITAL", transformation: "Dar estructura, identidad y presencia digital a un estudio de diseño y desarrollo de sistemas digitales.", summary: "Cosmic Studio reúne servicios de diseño, desarrollo y construcción de soluciones digitales bajo una misma propuesta.", metadata: [{ label: "Tipo", value: "Marca + web" }, { label: "Rol", value: "Diseño · estructura · comunicación" }, { label: "Contexto", value: "Proyecto propio" }],
    sections: [
      { number: "02", label: "El desafío", headline: "No bastaba con tener servicios. Había que hacer comprensible qué conectaba todo.", copy: ["El desafío fue darle una estructura común a una oferta que podía incluir páginas web, tiendas online, productos digitales, sistemas internos y automatizaciones."] },
      { number: "03", label: "Darle forma", copy: ["El trabajo incluyó organizar la propuesta, definir cómo presentar los servicios, construir una identidad y traducirla a una experiencia web coherente."], blocks: ["Posicionamiento", "Arquitectura de servicios", "Identidad", "Web"].map((title) => ({ title, copy: "Estructura, identidad y experiencia.", visual: visual("Evidencia pendiente", title) })) },
      { number: "04", label: "Resultado", copy: ["Cosmic Studio funciona como una estructura desde la que presentar y desarrollar soluciones digitales distintas sin que cada servicio parezca una oferta desconectada."] },
      { number: "05", label: "Aprendizaje", highlight: "Diseñar una marca también puede ser diseñar un sistema: decidir qué partes existen, cómo se relacionan y cómo alguien entiende la propuesta." },
    ], nextProject: "nodux",
  },
};

export const portfolioCaseStudyOrder = ["nodux", "gestock", "operacion-de-tienda", "cosmic-studio"];
